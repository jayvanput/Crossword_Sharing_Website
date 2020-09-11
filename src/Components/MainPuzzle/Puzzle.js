import React from 'react';
import './Puzzle.css'
import Square from './Square'
import Clues from './Clues'

class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      puzzle: [],
      squares: [],
      clues: [],
      row_tab: true,
      col_tab_order: [],
      orig_tab_order: [],
      size: 0,
      coords: [0, 0]
    }
    this.changeFocus = this.FocusNext.bind(this)
    this.get_col_tab = this.get_col_tab.bind(this)
  }
  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:4000/puzzles/${this.props.id}/puzzle`),
      fetch(`http://localhost:4000/puzzles/${this.props.id}/squares`),
      fetch(`http://localhost:4000/puzzles/${this.props.id}/clues`)
    ])
      .then(([response_puz, response_squares, response_clues]) =>
        Promise.all([response_puz.json(), response_squares.json(), response_clues.json()])
      )
      .then(([puzzle, squares, clues]) => {
        let col_tab_order = [];
        for (let i = 0; i < squares.length; i++) {
          col_tab_order.push(squares[i].col_tab)
        }
        this.setState({
          puzzle,
          squares,
          clues,
          col_tab_order,
          orig_tab_order: col_tab_order,
          active_number: 0
        })
      })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      Promise.all([
        fetch(`http://localhost:4000/puzzles/${this.props.id}/squares`),
        fetch(`http://localhost:4000/puzzles/${this.props.id}/clues`)
      ])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([response1, response2]) => {
          this.setState({
            squares: response1,
            clues: response2
          })
          return [response1, response2]
        }).then(([response1, response2]) => {
          let col_tab_order = [];
          for (let i = 0; i < response1.length; i++) {
            col_tab_order.push(response1[i].col_tab)
          }
          this.setState({
            col_tab_order
          })
          if (response1.length !== this.state.orig_tab_order.length) {
            this.setState({
              orig_tab_order: col_tab_order
            })
            for (let x = 0; x < Object.keys(this.refs).length; x++) {
              const ref_name = `ref${x}`;
              this.refs[ref_name].value = "";
            }
          }
        })
    }
    // Handling the puzzle tabbing.
    for (let x = 0; x < Object.keys(this.refs).length; x++) {
      const ref_name = `ref${x}`
      let row_offset = Math.sqrt(Object.keys(this.refs).length);

      this.refs[ref_name].onfocus = (e) => {
        this.refs[ref_name].select();
        let active_number = this.state.squares[x].number
        this.setState({
          active_number
        })
      }
      this.refs[ref_name].onkeydown = (e) => {
        let col_tab_order = [...this.state.orig_tab_order]
        // Handle ArrowLeft
        if (e.keyCode === 37) {
          let col_tab = this.get_col_tab(x - 1)
          col_tab_order[x] = -1
          col_tab_order[x - 1] = col_tab
          this.setState({
            row_tab: true,
            col_tab_order
          })
          this.FocusNext(e, this.refs[ref_name], x - 1, 1)
        }
        // Handle ArrowUp
        if (e.keyCode === 38) {
          let col_tab = this.get_col_tab(x - row_offset)
          col_tab_order[x] = -1
          col_tab_order[x - row_offset] = col_tab
          this.setState({
            row_tab: false,
            col_tab_order
          })
          this.FocusNext(e, this.refs[ref_name], x - row_offset, 1)
        }
        // Handle ArrowRight
        if (e.keyCode === 39) {
          let col_tab = this.get_col_tab(x + 1)
          col_tab_order[x] = -1
          col_tab_order[x + 1] = col_tab
          this.setState({
            row_tab: true,
            col_tab_order
          })
          this.FocusNext(e, this.refs[ref_name], x + 1, 0)
        }
        // Handle ArrowDown
        if (e.keyCode === 40) {
          let col_tab = this.get_col_tab(x + row_offset)
          col_tab_order[x] = -1
          col_tab_order[x + row_offset] = col_tab
          this.setState({
            row_tab: false,
            col_tab_order
          })
          this.FocusNext(e, this.refs[ref_name], x + row_offset, 1)
        }
        // Handle ArrowDown
        if (e.keyCode === 17) {
          this.setState({
            row_tab: !this.state.row_tab
          })
        }
        if (e.shiftKey && e.keyCode == 9) {
          this.setState({
            col_tab_order: this.state.orig_tab_order
          })
        }
      }
      // Handle keypress
      this.refs[ref_name].oninput = (e) => {
        let col_tab_order;
        if (this.state.row_tab) {
          this.refs[ref_name].value = this.refs[ref_name].value[0]
          this.FocusNext(e, this.refs[ref_name], x + 1);
        } else {
          if (this.refs[`ref${x + row_offset}`] && this.refs[`ref${x + row_offset}`].className == 'cell white') {
            col_tab_order = [...this.state.orig_tab_order]
            let col_tab = this.get_col_tab(x + row_offset)
            col_tab_order[x] = -1
            col_tab_order[x + row_offset] = col_tab
            this.setState({
              col_tab_order
            })
          }
          this.refs[ref_name].value = this.refs[ref_name].value[0]
          this.FocusNext(e, this.refs[ref_name], x + row_offset);
        }
      }
    }
  }
  FocusNext(e, field, x, dir_flag) {
    const ref_name = `ref${x}`
    if (this.refs[ref_name]
      && this.refs[ref_name].className == 'cell white') {
      this.refs[ref_name].focus()
    } else {
      field.select()
    }
  }

  get_col_tab(x) {
    let size = Math.sqrt(Object.keys(this.refs).length);
    let floor_index = x % size;
    let tab_order = 0;
    for (let i = x; i > 0; i -= size) {
      const ref_name = `ref${i - size}`
      if (this.refs[ref_name] && this.refs[ref_name].className === "cell black") {
        tab_order = i
        break
      }
    }
    if (!tab_order) {
      tab_order = floor_index
    }
    return this.state.orig_tab_order[tab_order]
  }

  render() {
    const { squares, clues } = this.state;
    const size = Math.sqrt(squares.length);
    const { row_tab, col_tab_order, active_number } = this.state
    return (
      <div id="puzzle">
        <table>
          <tbody>
            {[...Array(Math.sqrt(squares.length))].map((row, index_row) => (
              <tr key={index_row}>
                {squares.slice(index_row * size, (index_row + 1) * size).map((square, index) => (
                  < Square ref={`ref${index_row * size + index}`}
                    key={index_row * size + index}
                    square={square}
                    tab={row_tab}
                    col_tab_order={col_tab_order[index_row * size + index]}
                    font_val={squares.length} />
                ))
                }
              </tr>
            ))}
          </tbody>
        </table>
        <Clues clues={clues} active_number={active_number} />
      </div>
    );
  }
}

export default Puzzle;
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
      row_tab: true
    }
    this.changeFocus = this.changeFocus.bind(this)
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
      .then(([puzzle, squares, clues]) => this.setState({
        puzzle,
        squares,
        clues
      }))

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
        })
    }
    for (let x = 0; x < Object.keys(this.refs).length; x++) {
      const ref_name = `ref${x}`
      this.refs[ref_name].onfocus = (e) => {
        e.target.innerText = "";
      }
      this.refs[ref_name].oninput = (e) => {
        if (e.target.innerText.length > 1) {
          e.target.innerText = e.target.innerText[0];
        }
        this.changeFocus(e, this.refs[ref_name], x);
      }
      this.refs[ref_name].onkeydown = (e) => {
        if (e.keyCode === 40) {
          this.setState({
            row_tab: false
          })
        }
        if (e.keyCode === 39) {
          this.setState({
            row_tab: true
          })
        }
      }
    }
  }
  changeFocus(e, field, x) {
    let row_offset = Math.sqrt(Object.keys(this.refs).length);
    if (this.state.row_tab) {
      const ref_name = `ref${x + 1}`
      if (this.refs[ref_name] && this.refs[ref_name].className == 'cell white') {
        this.refs[ref_name].focus()
      }
    } else {
      const ref_name = `ref${x + row_offset}`
      if (this.refs[ref_name] && this.refs[ref_name].className == 'cell white') {
        this.refs[ref_name].focus()
      }
    }
  }
  render() {
    const { squares, clues } = this.state;
    const size = Math.sqrt(squares.length);
    const { row_tab } = this.state
    return (
      <div id="puzzle">
        <table>
          <tbody>
            {[...Array(Math.sqrt(squares.length))].map((row, index_row) => (
              <tr key={index_row}>
                {squares.slice(index_row * size, (index_row + 1) * size).map((square, index) => (
                  row_tab
                    ?
                    < Square ref={`ref${index_row * size + index}`}
                      key={index_row * size + index}
                      square={square}
                      font_val={squares.length} />
                    :
                    < Square ref={`ref${index_row * size + index}`}
                      key={index_row * size + index}
                      tab_order={index + 1}
                      square={square}
                      font_val={squares.length} />
                ))
                }
              </tr>
            ))}

          </tbody>
        </table>
        <Clues clues={clues} />
      </div>
    );
  }
}

export default Puzzle;
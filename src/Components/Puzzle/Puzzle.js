import React from 'react';
import './Puzzle.css'
import Square from './Square'
import Clues from './Clues'
import PuzzleList from './PuzzleList';

class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [],
      clues: [],
      next_tab: 5,
      across_dir_flag: 1,
      active_clue: 1
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleDirChange = this.handleDirChange.bind(this)
  }

  componentDidMount() {
    fetch(`/puzzles/`)
      .then(response_squares => response_squares.json())
      .then(
        puzzle => {
          this.setState({
            squares: puzzle.squares,
            clues: puzzle.clues
          })
        },
      )
  }

  handleSelect(next_tab, active_clue) {
    this.setState({
      next_tab,
      active_clue
    })
    if (active_clue) {
      if (this.state.across_dir_flag) {
        document.getElementById("a" + active_clue).scrollIntoView()
      } else {
        document.getElementById("d" + active_clue).scrollIntoView()
      }
    }
  }

  handleDirChange(dir_flag) {
    this.setState({
      across_dir_flag: dir_flag,
    })
  }

  render() {
    let { squares, next_tab, across_dir_flag, clues, active_clue } = this.state;
    let size = Math.sqrt(squares.length)
    return (
      <div className="row">
        <div className="col">
          <table>
            <tbody>
              {[...Array(size)].map((row, index_row) => (
                <tr key={index_row}>
                  {squares.slice(index_row * size, (index_row + 1) * size).map((square, index) => (
                    <Square
                      onSelect={this.handleSelect}
                      onDirChange={this.handleDirChange}
                      key={(index_row) * size + index}
                      id={(index_row) * size + index}
                      size={size}
                      next_tab={next_tab}
                      square={square}
                      across_dir_flag={across_dir_flag} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Clues clues={clues} active_clue={active_clue} across_dir_flag={across_dir_flag} />
      </div>
    )
  }
}
export default Puzzle;
import React from 'react';
import './Puzzle.css'
import PuzzleRow from './PuzzleRow'
import Clues from './Clues'

class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      puzzle: [],
      squares: [],
      clues: []
    }
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
  }

  render() {
    const { squares, clues } = this.state
    return (
      <div id="puzzle">
        <table>
          <tbody>
            {[...Array(Math.sqrt(squares.length))].map((row, index) => (
              <PuzzleRow row_size={Math.sqrt(squares.length)} squares={squares} id={index} key={index}></PuzzleRow>
            ))}
          </tbody>
        </table>
        <Clues clues={clues} />
      </div>
    );
  }
}

export default Puzzle;
import React from 'react';
import './Puzzle.css'
import PuzzleRow from './PuzzleRow'

class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clues: [],
      squares: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000/puzzles/${this.props.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          squares: response.squares,
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      fetch(`http://localhost:4000/puzzles/${this.props.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(response => {

          this.setState({
            squares: response.squares,
          })
        })
    }
  }

  render() {
    const { squares } = this.state
    return (
      <div id="puzzle">
        <table>
          <tbody>
            {[...Array(Math.sqrt(squares.length))].map((row, index) => (
              <PuzzleRow row_size={Math.sqrt(squares.length)} squares={squares} id={index} key={index}></PuzzleRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Puzzle;
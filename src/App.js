import React from 'react';
import './index.css';
import PuzzleList from './Components/SidePuzzles/PuzzleList';
import Puzzle from './Components/MainPuzzle/Puzzle';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzles: [],
    }
  }
  componentDidMount() {
    fetch(`/puzzles`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => this.setState({ puzzles: response.data }))
  }

  render() {
    const { puzzles } = this.state
    return (
      <div id="content">
        <header>
          <h1>JVCrosswords</h1>
        </header>
        <div id="puzzle_master" >
          <aside>
            <h1>About Me:</h1>
            <p>My name is Jay VanPut.</p>
          </aside>
          <Puzzle />
          <PuzzleList puzzles={puzzles} />
        </div>
      </div >
    )
  }
}
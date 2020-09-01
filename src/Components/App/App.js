import React from 'react';
import './App.css';
import Puzzle from '../Puzzle/Puzzle'

class App extends React.Component {
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
    const { puzzles } = this.state;
    return (
      <div className="container">
        {puzzles.map(puzzle => <Puzzle puzzle={puzzle} />)}
      </div>
    );
  }

}

export default App;

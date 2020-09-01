import React from 'react';
import './App.css';
import Puzzle from '../Puzzle/Puzzle'

class App extends React.Component {

  render() {

    return (
      <div className="container">
        {this.props.puzzles.map(puzzle => <Puzzle puzzle={puzzle} />)}
      </div>
    );
  }

}

export default App;

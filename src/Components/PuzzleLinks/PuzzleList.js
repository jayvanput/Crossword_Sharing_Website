import React from 'react';
import './PuzzleList.css';
import PuzzleItem from './PuzzleItem'

class PuzzleList extends React.Component {

  render() {
    return (
      <div className="container">
        {this.props.puzzles.map((puzzle, index) =>
          <PuzzleItem puzzle={puzzle} key={index + 1} />)}
      </div>
    );
  }

}

export default PuzzleList;

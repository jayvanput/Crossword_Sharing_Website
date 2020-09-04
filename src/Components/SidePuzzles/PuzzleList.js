import React from 'react';
import './PuzzleList.css';
import PuzzleItem from './PuzzleItem'

class PuzzleList extends React.Component {

  render() {
    return (
      <div id="puzzles">
        <div className="container">
          {this.props.puzzles.map((puzzle, index) =>
            <PuzzleItem puzzle={puzzle} key={index + 1} />)}
        </div>
      </div>
    );
  }

}

export default PuzzleList;

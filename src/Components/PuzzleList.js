import React from 'react';
import './PuzzleList.css';
import PuzzleItem from './PuzzleItem'
import { Link} from 'react-router-dom'

class PuzzleList extends React.Component {

  render() {
    const {puzzles} = this.props
    return (
      <div id="puzzle_links">
        <div className="container">
          {puzzles.map((puzzle) =>
            <Link to={`/puz/${puzzle.ID}`} key={puzzle.ID}>
              <PuzzleItem puzzle={puzzle} key={puzzle.ID} />
            </Link>)}
        </div>
      </div>
    );
  }

}

export default PuzzleList;

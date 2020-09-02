import React from 'react';
import './PuzzleList.css';
import PuzzleItem from '../PuzzleItem/PuzzleItem'

class PuzzleList extends React.Component {
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
        {puzzles.map((puzzle, index) => <PuzzleItem puzzle={puzzle} key={index + 1} />)}
      </div>
    );
  }

}

export default PuzzleList;

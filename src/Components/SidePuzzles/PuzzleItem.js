import React from 'react';
import './PuzzleItem.css'

export default class PuzzleItem extends React.Component {
  render() {
    return (
      <a href={"/puzzles/" + this.props.key}>
        <div className="puz">
          <div className="name">
            {this.props.puzzle.name}
          </div>
          <span>|</span>
          <div className="size">
            {this.props.puzzle.size}
          </div>
          <span>|</span>
          <div className="author">
            {this.props.puzzle.date}
          </div>
        </div>
      </a>
    )
  }
}
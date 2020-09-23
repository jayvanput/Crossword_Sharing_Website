import React from 'react';
import './PuzzleItem.css'

export default class PuzzleItem extends React.Component {
  render() {
    return (
      <div className="puz">
        <div className="name">
          {this.props.puzzle.title}
        </div>
        <span>|</span>
        <div className="size">
          {this.props.puzzle.date_created}
        </div>
        <span>|</span>
        <div className="author">
          {this.props.puzzle.height}x{this.props.puzzle.width}
        </div>
      </div>
    )
  }
}
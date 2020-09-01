import React from 'react';
import './Puzzle.css'

export default class Puzzle extends React.Component {
  render() {
    return (
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
    )
  }
}
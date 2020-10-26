import React from 'react';
import './PuzzleInfo.css'
export default function PuzzleInfo(props) {
  return (
    <div id="metadata">
      <div className="row">
        <div className="col data" id="name">{props.puzzle.title}</div>
      </div>
      <div className="row">
        <span className="col data">-----</span>
      </div>
      <div className="row">
        <div className="col data" id="size">{props.puzzle.width} x {props.puzzle.height}</div>
      </div>
      <div className="row">
        <span className="col data">-----</span>
      </div>
      <div className="row">
        <div className="col data" id="Date">{props.puzzle.date_created}</div>
      </div>
    </div>
  )
}
import React from 'react';
import LatestPuzzle from './LatestPuzzle'
import './Home.css'

export default function Home(props) {
  return (
    <div className="row">
      <div className="col">
        <div id="homepage">
          {props.puzzles && <LatestPuzzle puzzles={props.puzzles} />}
        </div>
      </div>
    </div>

  )
}
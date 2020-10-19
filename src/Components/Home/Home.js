import React from 'react';
import LatestPuzzle from './LatestPuzzle'
import './Home.css'

export default function Home() {
  return (
    <div className="row">
      <div className="col">
        <div id="homepage">
          <LatestPuzzle />
        </div>
      </div>
    </div>

  )
}
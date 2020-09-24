import React from 'react';
import PuzzlePicture from './PuzzlePicture'
import {Link} from 'react-router-dom'
import PuzzleInfo from './PuzzleInfo'
import './LatestPuzzle.css'
export default function Home() {
  return (
    <Link to={`/puz/1`}>
      <div id="new_puz">
        <PuzzlePicture />
        <PuzzleInfo />
      </div>
    </Link>
  )
}
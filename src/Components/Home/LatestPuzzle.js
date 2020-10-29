import React from 'react';
import PuzzlePicture from './PuzzlePicture'
import { Link } from 'react-router-dom'
import PuzzleInfo from './PuzzleInfo'
import Carousel from 'react-bootstrap/Carousel'
import './LatestPuzzle.css'

export default function LatestPuzzle(props) {
  return (
    <Carousel interval={null} slide={true}>
      <Carousel.Item className="carousel-inner">
        <Link to={`/puz/` + props.puzzles[0].ID}>
          <div id="new_puz">
            <div className="row d-flex flex-wrap align-items-center">
              <div className="col">
                <PuzzlePicture />
              </div>
              <div className="col">
                {props.puzzles && <PuzzleInfo puzzle={props.puzzles[0]} />}
              </div>
            </div>
          </div>
        </Link>
      </Carousel.Item>

    </Carousel>

  )
}
import React from 'react';
import pic from '../../assets/puzzle_1.png'
import './PuzzlePicture.css'
export default function Home() {
  return (
    <img className="mx-auto d-block" src={pic} alt="Crossword" />
  )
}
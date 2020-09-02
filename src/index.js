import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PuzzleList from './Components/SidePuzzles/PuzzleList';
import Puzzle from './Components/MainPuzzle/Puzzle';

ReactDOM.render(
  <div id="puzzle_master">
    <aside>
      <h1>About Me:</h1>
      <p>My name is Jay VanPut.</p>
    </aside>
    <Puzzle />
    <PuzzleList />
  </div>
  ,
  document.getElementById('content')
);


// ReactDOM.render(
//   <PuzzleList />,
//   document.getElementById('puzzles')
// );

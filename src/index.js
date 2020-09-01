import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

fetch(`/puzzles`, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(response => console.log(response))

const puzzle = {
  name: "My first puzzle",
  size: "5x5",
  date: "2020-05-10"
}
const puzzles = [puzzle, puzzle, puzzle];

ReactDOM.render(
  <App puzzles={puzzles} />,
  document.getElementById('content_container')
);

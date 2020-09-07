import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './index.css';
import Puzzle from './Components/MainPuzzle/Puzzle';
import PuzzleItem from './Components/PuzzleLinks/PuzzleItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzles: [],
    }
  }
  componentDidMount() {
    fetch(`http://localhost:4000/puzzles`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => this.setState({
        puzzles: response.puzzles
      }))
  }

  render() {
    const { puzzles } = this.state
    return (
      <div id="content">
        <header>
          <h1>JVCrosswords</h1>
        </header>
        <div></div>
        <div id="puzzle_master" >
          <Router>

            <div id="puzzle_links">
              <div className="container">
                {puzzles.map((puzzle, index) =>
                  <Link to={`/puz/${index + 1}`} key={index + 1}>
                    <PuzzleItem puzzle={puzzle} key={index + 1} />
                  </Link>)}
              </div>
            </div>
            <div id="puzzles">
              <Route path={'/puz/:id'} render={({ match }) => (
                <Puzzle id={match.params.id} />
              )} />
            </div>
            <aside>
              <h1>About Me:</h1>
              <p>My name is Jay VanPut.</p>
            </aside>
          </Router>
        </div>
      </div >
    )
  }
}
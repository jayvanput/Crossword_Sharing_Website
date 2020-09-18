import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './index.css';
import Puzzle from './Components/MainPuzzle/Puzzle';
import PuzzleItem from './Components/PuzzleLinks/PuzzleItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzles: [],
      max_id: 0
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
      .then(response => (
        this.setState({
          puzzles: response.puzzles,
          max_id: response.puzzles[response.puzzles.length - 1].ID
        })
      ))
  }

  render() {
    const { puzzles, max_id } = this.state
    return (
      <div id="content">
        <header>
          <h1>JVCrosswords</h1>
        </header>
        <div></div>
        <div id="puzzle_master" >
          <Router>
            <aside>
              <h1>About Me:</h1>
              <p>My name is Jay VanPut.</p>
            </aside>
            <div id="puzzles">
              <Switch>
                <Route exact path={'/puz/:id'} render={({ match }) => (
                  <Puzzle id={match.params.id} />
                )} />
                <Route exact path={'/'} render={() => (
                  <Puzzle id={max_id} />
                )} />
              </Switch>
            </div>
            <div id="puzzle_links">
              <div className="container">
                {puzzles.map((puzzle) =>
                  <Link to={`/puz/${puzzle.ID}`} key={puzzle.ID}>
                    <PuzzleItem puzzle={puzzle} key={puzzle.ID} />
                  </Link>)}
              </div>
            </div>
          </Router>
        </div>
      </div >
    )
  }
}
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Puzzle from './Components/Puzzle';
import PuzzleList from './Components/PuzzleList';
import Home from './Components/Home/Home.js';
import Header from './Components/Header';
import Archive from './Components/Archive';

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
    const { puzzles } = this.state
    return (
      <Router>
        <div id="content">
          <Header />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/archive'} component={Archive} />
          <Switch>
            <Route exact path={'/puz/:id'} render={({ match }) => (
              <Puzzle id={match.params.id} puzzles={puzzles} />
            )} />
          </Switch>
        </div >
      </Router>
    )
  }
}
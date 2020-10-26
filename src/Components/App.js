import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Puzzle from './Puzzle/Puzzle';
import Home from './Home/Home.js';
import Header from './Header';
import Archive from './Archive/Archive';
import './App.css'

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
          newest_puzzles: response.puzzles.slice(response.puzzles.length - 4, response.puzzles.length - 1)
        })
      ))
  }

  render() {
    const { puzzles, newest_puzzles } = this.state
    console.log(puzzles)
    console.log(newest_puzzles)
    return (
      <Router>
        <div className="container">
          <Header />
          <div id="content">
            <Route exact path={'/'} component={() => <Home puzzles={newest_puzzles} />} />
            <Route exact path={'/archive'} component={Archive} />
            <Switch>
              <Route exact path={'/puz/:id'} render={({ match }) => (
                <Puzzle id={match.params.id} puzzles={puzzles} />
              )} />
            </Switch>
          </div >
        </div>
      </Router>

    )
  }
}
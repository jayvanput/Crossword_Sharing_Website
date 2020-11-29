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
    fetch(`/puzzles`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => (
        this.setState({
          newest_puzzle: response
        })
      ))
  }

  render() {
    const { newest_puzzle } = this.state
    return (
      <Router>
        <div className="container">
          <Header />
          <div id="content">
            <Route exact path={'/'} component={() => <Home puzzles={newest_puzzle} />} />
            <Route exact path={'/archive'} component={Archive} />
            <Switch>
              <Route exact path={'/puz/:id'} render={({ match }) => (
                <Puzzle id={match.params.id} />
              )} />
            </Switch>
          </div >
        </div>
      </Router>
    )
  }
}
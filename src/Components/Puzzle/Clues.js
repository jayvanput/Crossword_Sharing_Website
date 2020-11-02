import React from 'react';
import './Clues.css'
import Clue from './Clue'
class Clues extends React.Component {

  render() {
    const { clues, coords, row_tab } = this.props
    return (
      <div className="col clueList">
        <div className="row">
          <div className="col across">
            <ul>
              {clues.map((clue, index) => {
                if (clue.direction === 0) {
                  return <Clue clue={clue} key={"a" + index} active_clue={this.props.active_clue} row={1} across_dir_flag={this.props.across_dir_flag} />
                }
              })}
            </ul>
          </div>
          <div className="col down">
            <ul>
              {clues.map((clue, index) => {
                if (clue.direction === 1) {
                  return <Clue clue={clue} key={"d" + index} active_clue={this.props.active_clue} row={0} across_dir_flag={!this.props.across_dir_flag} />
                }
              })}
            </ul>
          </div>
        </div>
      </div >
    )
  }
}

export default Clues;
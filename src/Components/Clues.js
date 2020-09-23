import React from 'react';
import './Clues.css'
class Clues extends React.Component {

  render() {
    const { clues, coords, row_tab } = this.props
    return (
      <div className="clueList">
        <div>
          {clues.map((clue, index) => {
            if (clue.direction === 0) {
              return <div key={index} className={coords[0] == clue.number && row_tab ? "active" : "inactive"}>{clue.number}. {clue.text}</div>
            }
          })}
        </div>
        <div>
          {clues.map((clue, index) => {
            if (clue.direction === 1) {
              return <div key={index} className={coords[1] == clue.number && !row_tab ? "active" : "inactive"}>{clue.number}. {clue.text}</div>
            }
          })}
        </div>
      </div>
    )
  }
}

export default Clues;
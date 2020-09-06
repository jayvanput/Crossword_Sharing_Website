import React from 'react';

class Clues extends React.Component {

  render() {
    const { clues } = this.props
    return (
      <div className="clueList">
        <div>
          {clues.map((clue, index) => {
            if (clue.direction === 0) {
              return <div key={index}>{clue.number}. {clue.text}</div>
            }
          })}
        </div>
        <div>
          {clues.map((clue, index) => {
            if (clue.direction === 1) {
              return <div key={index}>{clue.number}. {clue.text}</div>
            }
          })}
        </div>
      </div>
    )
  }
}

export default Clues;
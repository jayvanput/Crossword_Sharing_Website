import React from 'react';
import './Puzzle.css'
import Square from './Square'

class Puzzle extends React.Component {

  render() {

    const squares = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [6, 7, 8, 9, 10], [6, 7, 8, 9, 10], [6, 7, 8, 9, 10]]
    return (
      <div id="puzzle">
        <table>
          <tbody>
            {squares.map(row =>
              <tr>
                {row.map((square, index) => <Square number={square} font_val={squares.length} />)}
              </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Puzzle;
import React from 'react';
import Square from './Square'

class PuzzleRow extends React.Component {

  render() {
    const { row_size, squares, id } = this.props;
    const row_squares = this.props.squares.slice(id * row_size, (id + 1) * row_size);
    return (
      <tr>
        {row_squares.map((square, index) => (
          <Square square={square} font_val={squares.length} key={square.ID} id={square.ID} onChange={this.inputChange} />
        ))}
      </tr>
    );
  }
}

export default PuzzleRow;
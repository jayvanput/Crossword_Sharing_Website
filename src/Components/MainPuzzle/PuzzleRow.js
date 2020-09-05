import React from 'react';
import Square from './Square'

class PuzzleRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { row_size, squares, id } = this.props;
    const row_squares = this.props.squares.slice(id * row_size, (id + 1) * row_size);
    return (
      <tr>
        {row_squares.map(square => (
          <Square number={square.number} font_val={this.props.squares.length} />
        ))}
      </tr>
    );
  }
}

export default PuzzleRow;
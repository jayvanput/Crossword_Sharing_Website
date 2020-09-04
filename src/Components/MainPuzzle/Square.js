import React from 'react';
import './Square.css'
class Square extends React.Component {
  render() {
    return (
      <td>
        <span style={{ "fontSize": 150 / this.props.font_val }} > {this.props.number}</span>
        <input style={{ "fontSize": 300 / this.props.font_val }} maxLength="1"></input>
      </td >
    );
  }
}

export default Square;
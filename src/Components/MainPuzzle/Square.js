import React from 'react';
import './Square.css'
class Square extends React.Component {
  render() {
    return (
      <td>
        <span style={{ "fontSize": 500 / this.props.font_val }} > {this.props.number}</span>
        <input style={{ "fontSize": 1500 / this.props.font_val }} maxLength="1"></input>
      </td >
    );
  }
}

export default Square;
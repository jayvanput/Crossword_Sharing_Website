import React from 'react';
import './Square.css'
class Square extends React.Component {
  render() {
    return (
      <td>
        <span style={{ "font-size": 150 / this.props.font_val }} > {this.props.number}</span>
        <input style={{ "font-size": 300 / this.props.font_val }} ></input>
      </td >
    );
  }
}

export default Square;
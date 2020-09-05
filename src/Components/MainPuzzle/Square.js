import React from 'react';
import './Square.css'
class Square extends React.Component {

  render() {
    return (
      <td className={this.props.square.black === 1 ? "black" : "white"}>
        <span style={{ "fontSize": 500 / this.props.font_val }} > {this.props.square.number}</span>
        <input key={this.props.ID} style={{ "fontSize": 1000 / this.props.font_val }} maxLength="1" defaultValue=""></input>
      </td >
    );
  }
}

export default Square;
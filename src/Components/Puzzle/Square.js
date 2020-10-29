import { render } from '@testing-library/react';
import React from 'react';
import './Square.css'
class Square extends React.Component {
  constructor(props) {
    super(props)
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus() {
    this.props.onFocus(this.props.square.next_tab)
  }

  render() {
    let cell_col = this.props.square.black === 1 ? "cell-black" : 'cell-white'
    let active_word = this.props.next_tab === this.props.square.next_tab ? "blue" : 'test'
    return (
      <td className={cell_col + " " + active_word}>
        <span>{this.props.square.number}</span>
        <input
          tabIndex={this.props.next_tab == this.props.id ? 0 : -1}
          onFocus={this.handleFocus}></input>
      </td >
    )
  }

};

export default Square;
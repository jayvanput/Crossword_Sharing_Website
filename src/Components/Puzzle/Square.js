import { render } from '@testing-library/react';
import React from 'react';
import './Square.css'
class Square extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.checkOpenSquare = this.checkOpenSquare.bind(this);
  }


  checkOpenSquare(squareID, offset) {
    let targetSquare = document.getElementById(squareID)
    let nextSquare = document.getElementById(squareID + offset)
    let nextEnd = squareID + offset
    if (targetSquare.value != "" && (nextSquare.dataset.black == "1" || nextSquare.id % this.props.size == 0)) {
      document.getElementById(squareID).select()
    } else if (targetSquare.value != "") {
      this.checkOpenSquare(nextEnd, offset)
    } else {
      targetSquare.select()
    }
  }

  handleKeyPress(e) {
    e.preventDefault()
    if (this.props.across_dir_flag) {
      if ((document.getElementById(this.props.id + 1).getAttribute('data-black') == 0)
        && ((this.props.id + 1) % this.props.size != 0)) {
        document.getElementById(this.props.id + 1).select()
      } else {
        document.getElementById(this.props.id).select()
      }
    } else {
      if (((this.props.id + this.props.size) < Math.pow(this.props.size, 2)) &&
        (document.getElementById(this.props.id + this.props.size).getAttribute('data-black') == 0)) {
        document.getElementById(this.props.id + this.props.size).select()
      } else {
        document.getElementById(this.props.id).select()
      }
    }
    document.getElementById(this.props.id).value = e.key
  }

  handleSelect() {
    if (this.props.across_dir_flag) {
      this.props.onSelect(this.props.square.next_tab, this.props.square.across_clue)
    } else {
      this.props.onSelect(this.props.square.next_tab_down, this.props.square.down_clue)
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 38 || e.keyCode == 40) {
      this.props.onDirChange(0);
      this.props.onSelect(this.props.square.next_tab_down)
    } else if (e.keyCode == 39 || e.keyCode == 37) {
      this.props.onDirChange(1);
      this.props.onSelect(this.props.square.next_tab)
    }
    if (this.props.across_dir_flag) {
      if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault()
        this.checkOpenSquare(this.props.square.prev_tab, 1)
      } else if (e.keyCode == 9) {
        e.preventDefault()
        this.checkOpenSquare(this.props.square.next_tab, 1)
        // this.props.square.next_tab
      }
    }
    else {
      if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault()
        this.checkOpenSquare(this.props.square.prev_tab_down, 15)
      } else if (e.keyCode == 9) {
        e.preventDefault()
        this.checkOpenSquare(this.props.square.next_tab_down, 15)
      }
    }

    // Handle Square movements
    if (e.keyCode == 37) {
      if ((this.props.square.ID - 1) % this.props.size != 0 && this.props.square.ID != 1) {
        if (this.props.across_dir_flag) {
          document.getElementById(this.props.id - 1).select()
        } else {
          this.props.onDirChange(1)
        }
      }
    } else if (((this.props.id - this.props.size) >= 0) && e.keyCode == 38) {
      if (!this.props.across_dir_flag) {
        document.getElementById(this.props.id - this.props.size).select()
      } else {
        this.props.onDirChange(0)
      }
    } else if (e.keyCode == 39 && this.props.square.ID % this.props.size != 0) {
      if (this.props.across_dir_flag) {
        document.getElementById(this.props.id + 1).select()
      } else {
        this.props.onDirChange(1)
      }
    } else if (((this.props.id + this.props.size) < Math.pow(this.props.size, 2)) && e.keyCode == 40) {
      if (!this.props.across_dir_flag) {
        document.getElementById(this.props.id + this.props.size).select()
      } else {
        this.props.onDirChange(0)
      }
    }

    // Handle backspace
    if (e.keyCode == 8) {
      document.getElementById(this.props.id).value = ""
      if (!this.props.across_dir_flag) {
        if (this.props.id - this.props.size > 0) {
          document.getElementById(this.props.id - this.props.size).select()
        } else {
          document.getElementById(this.props.id).select()
        }
      } else {
        if (this.props.id - 1 >= 0) {
          document.getElementById(this.props.id - 1).select()
        }
      }
    }
  }

  render() {
    let cell_color = this.props.square.black === 1 ? "cell-black" : 'cell-white';
    let active_word;
    if (this.props.across_dir_flag) {
      active_word = this.props.next_tab === this.props.square.next_tab ? "blue" : ''
    } else {
      active_word = this.props.next_tab === this.props.square.next_tab_down ? "blue" : ''
    }

    let tab_idx = -1
    return (
      <td className={cell_color + " " + active_word}>
        <span>{this.props.square.number}</span>
        <input
          id={this.props.id}
          tabIndex={tab_idx}
          onSelect={this.handleSelect}
          onKeyDown={this.handleKeyDown}
          onKeyPress={this.handleKeyPress}
          data-black={this.props.square.black}
          maxLength={cell_color == "cell-black" ? 0 : 1}
          disabled={cell_color == "cell-black" ? true : false}
        ></input>
      </td >
    )
  }

};

export default Square;
import React from 'react';
import './Square.css'
const Square = React.forwardRef((props, ref) => (
  <td>
    <span>{props.square.number}</span>
    <input ref={ref}
      className={props.square.black === 1 ? "cell black" : "cell white"}
      tabIndex={props.square.black === 1 ? -1 : props.tab_order}
      maxLength="1"
    ></input>
  </ td >
));


export default Square;
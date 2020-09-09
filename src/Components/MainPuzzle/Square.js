import React from 'react';
import './Square.css'
const Square = React.forwardRef((props, ref) => (
  <td>
    <span>{props.square.number}</span>
    <input ref={ref}
      className={props.square.black === 1 ? "cell black" : "cell white"}
      tabIndex={props.tab ? props.square.row_tab : props.col_tab_order}
    ></input>
  </td>
));


export default Square;
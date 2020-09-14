import React from 'react';
import './Square.css'
const Square = React.forwardRef((props, ref) => (
  <td>
    <span>{props.square.number}</span>
    <input ref={ref}
      className={props.square.black === 1 ? "cell-black" : props.tab ? `cell-white ${props.x_active}` : `cell-white ${props.y_active}`}
      tabIndex={props.tab ? props.square.row_tab : props.col_tab_order}
    ></input>
  </td >
));


export default Square;
import React from 'react';
import './Clue.css'
export default function Clue(props) {
    return (
        <li id={"a" + props.clue.number} className={props.active_clue == props.clue.number && props.across_dir_flag ? "active_clue" : ""}>
            <div className="row">
                <div className="col-1">
                    <span>{props.clue.number}. </span>
                </div>
                <div className="col">
                    <span>{props.clue.text}</span>
                </div>
            </div>

        </li>
    )
}
import React from 'react';
import './ArchiveTab.css'

export default function ArchiveTab(props) {
  return (
    <div className="tab">
      <span>{props.text}</span>
    </div>
  )
}
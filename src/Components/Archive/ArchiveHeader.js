import React from 'react';
import './ArchiveHeader.css'
import ArchiveTab from './ArchiveTab'

export default function ArchiveHeader() {
  return (
    <div id="ArchiveHeader">
      <ArchiveTab text="Full" />
      <ArchiveTab text="Mini" />
    </div>
  )
}
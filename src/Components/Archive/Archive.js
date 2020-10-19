import React from 'react';
import ArchiveMenu from './ArchiveMenu'
import './Archive.css'

export default function Archive() {
  return (
    <div className="row">
      <div className="col">
        <div id="archive_page">
          <ArchiveMenu />
        </div>
      </div>
    </div >
  )
}
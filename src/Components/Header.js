import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to={`/`}>
        <h1>JVCrosswords</h1>
      </Link>
      <div id="buttons">
        <button>
          <Link to={`/archive`}>
            Archive
          </Link>
        </button>
        <button>
          <Link to={`/about`}>
            About
          </Link>
        </button>
      </div>
    </header>
  )
}
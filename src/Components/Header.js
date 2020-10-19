import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="row">
      <div className="col">
        <header>
          <nav className="nav justify-content-center">
            <Link to="/" className="nav-link col-sm-12 col-md-2 text-center">
              Home
            </Link>
            <Link to="/archive" className="nav-link col-sm-12 col-md-2 text-center">
              Archive
            </Link>
            <Link to="/about" className="nav-link col-sm-12 col-md-2 text-center">
              About
            </Link>
          </nav>
        </header>
      </div>
    </div>
  )
}
import React from 'react'

function Header({ title }) {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <span className="navbar-brand">
        <img
          src="http://kidsforward.net/assets/PDF-Logo.png"
          className="d-inline-block align-top"
          alt="logo"
          width="30"
          height="30"
        />
        &nbsp;{title}
      </span>
    </nav>
  )
}

export default Header

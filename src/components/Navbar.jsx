import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({name}) => {

  return (
          <nav className="navbar bg-dark ">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 w-100 text-center text-light">{name}</span>
          </div>
        </nav>
  )
}

Navbar.propTypes = {
  name : PropTypes.string
}

Navbar.defaultProps = {
  name : "I am default Value"
}
export default Navbar   
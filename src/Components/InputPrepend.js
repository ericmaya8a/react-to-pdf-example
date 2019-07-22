import React from 'react'
import PropTypes from 'prop-types'


function InputPrepend({ children, text }) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text">{text}</div>
      </div>
      {children}
    </div>
  )
}

InputPrepend.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}

export default InputPrepend

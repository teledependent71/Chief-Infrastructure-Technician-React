import React from 'react'

import PropTypes from 'prop-types'

import './gerda.css'

const Gerda = (props) => {
  return (
    <div className="gerda-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Gerda.defaultProps = {
  text: 'Text',
}

Gerda.propTypes = {
  text: PropTypes.string,
}

export default Gerda

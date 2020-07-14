import React from 'react'
import { func, string } from 'prop-types'

function PrimeBtn({ text, onClick, className }) {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

PrimeBtn.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  className: string,
}

export default PrimeBtn

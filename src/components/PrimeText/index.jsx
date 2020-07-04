import React from 'react'
import { func, string, number, oneOfType } from 'prop-types'
import styles from './text.module.scss'

function PrimeText({ id, name, type, placeholder, value, onChange }) {
  return (
    <textarea
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.textArea}
    />
  )
}

PrimeText.propTypes = {
  placeholder: string.isRequired,
  onChange: func.isRequired,
  value: string,
  type: string,
  name: string,
  id: oneOfType([string, number]),
}

export default PrimeText

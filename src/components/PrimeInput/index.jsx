import React from 'react'
import { func, string, number, oneOfType } from 'prop-types'
import styles from './input.module.scss'

function PrimeInput({ id, name, type, placeholder, value, onChange }) {
  return (
    <label htmlFor={id} className={styles.label}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </label>
  )
}

PrimeInput.propTypes = {
  placeholder: string.isRequired,
  onChange: func.isRequired,
  value: string,
  type: string,
  name: string,
  id: oneOfType([string, number]),
}

export default PrimeInput

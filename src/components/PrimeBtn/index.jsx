import React from 'react'
import { func, string } from 'prop-types'
import styles from './btn.module.scss'

function PrimeBtn({ text, onClick }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={styles.btn} type="button" onClick={onClick}>
      {text}
    </button>
  )
}

PrimeBtn.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
}

export default PrimeBtn

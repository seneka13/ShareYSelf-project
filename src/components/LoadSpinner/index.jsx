import React from 'react'
import styles from './load.module.scss'

function LoadSpinner() {
  return (
    <div className={styles.loadposit}>
      <div className={styles.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default LoadSpinner

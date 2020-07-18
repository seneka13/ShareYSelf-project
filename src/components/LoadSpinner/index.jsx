import React from 'react'
import styles from './load.module.scss'

function LoadSpinner({ className }) {
  return (
    <div className={styles.ldsEllipsis}>
      <div className={className} />
      <div className={className} />
      <div className={className} />
      <div className={className} />
    </div>
  )
}

export default LoadSpinner

import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './logo.module.scss'

function Logo() {
  return (
    <NavLink to="/" exact>
      <h1 className={styles.logo}>ShareYSelf</h1>
    </NavLink>
  )
}

export default Logo

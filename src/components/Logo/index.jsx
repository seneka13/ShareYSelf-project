import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './logo.module.scss'

function Logo() {
  return (
    <NavLink to="/" exact>
      <h1 className={styles.homePage}>ToMySelf</h1>
    </NavLink>
  )
}

export default Logo

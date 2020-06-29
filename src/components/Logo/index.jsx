import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './logo.module.scss'

function Logo() {
  return (
    <NavLink className={styles.homePage} to="/" exact>ToMySelf</NavLink>
  )
}

export default Logo

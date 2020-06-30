import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginIcon from '../Icons/LoginIcon'

import styles from './auth.module.scss'

function AuthOff() {
  return (
    <>
      <li><NavLink to="/signup">Регистрация</NavLink></li>
      <li><NavLink to="/login" className={styles.login}><LoginIcon className={styles.icon} />Войти</NavLink></li>
    </>

  )
}

export default AuthOff

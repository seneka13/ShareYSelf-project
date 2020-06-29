import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './helplink.module.scss'

function HelpLink() {
  return (
    <div className={styles.helpLink}>
      <NavLink className={styles.loginRedir} to="/signup" exact>
        Зарегестрироваться
      </NavLink>
      <NavLink className={styles.loginRedir} to="/" exact>
        Забыли пароль?
      </NavLink>
    </div>
  )
}

export default HelpLink

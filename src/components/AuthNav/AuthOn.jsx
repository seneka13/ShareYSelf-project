import React from 'react'
import { useSelector } from 'react-redux'
import ProfileIcon from '../Icons/ProfileIcon'

import styles from './auth.module.scss'

function AuthOn() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))

  return (
    <>
      <li className={styles.userName}><ProfileIcon className={styles.icon} />{user.firstname} {user.lastname}</li>
      <li>
        <button
          onClick={() => { window.localStorage.removeItem('token') }}
          className={styles.logOut}
          type="submit"
        > Выйти
        </button>
      </li>
    </>

  )
}

export default AuthOn

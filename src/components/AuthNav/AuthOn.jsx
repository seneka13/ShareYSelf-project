import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import ProfileIcon from '../Icons/ProfileIcon'
import { userLogOut } from '../../store/actions'

import styles from './auth.module.scss'

function AuthOn() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()
  const logOut = () => dispatch(userLogOut())

  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    logOut()
  }

  return (
    <>
      <li className={styles.userName}>
        <NavLink to="/" exact>
          <ProfileIcon className={styles.icon} />{user && user.firstname} {user && user.lastname}
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleLogOut}
          className={styles.logOut}
          type="submit"
        > Выйти
        </button>
        {!user && <Redirect to="/" />}
      </li>
    </>

  )
}

export default AuthOn

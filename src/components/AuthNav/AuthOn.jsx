import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import ProfileIcon from '../Icons/ProfileIcon'
import { userLogOut, clearFields } from '../../store/actions'

import styles from './auth.module.scss'

function AuthOn() {
  const { user, avatar } = useSelector((state) => ({
    user: state.auth.user,
    avatar: state.fields.user.avatar,
  }))

  const dispatch = useDispatch()
  const logOut = () => dispatch(userLogOut())
  const clear = () => dispatch(clearFields())

  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    logOut()
    clear()
  }

  return (
    <>
      <li className={styles.userName}>
        <NavLink to="/user" exact>
          {avatar ? <img className={styles.avatar} src={avatar} alt="avatar" /> : <ProfileIcon className={styles.icon} />}
          {user && user.firstname} {user && user.lastname}
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

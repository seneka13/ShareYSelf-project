import React from 'react'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import UserPasswordEdit from './UserPasswordEdit'
import UserEdit from './UserEdit'
import styles from './user.module.scss'

function UserInfo() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))
  return (
    <Col xs={12} md={8}>
      <div className={styles.userInfo}>
        <p>Логин: {user && user.username}</p>
        <p>Имя: {user && user.firstname}</p>
        <p>Фамилия: {user && user.lastname}</p>
        <div className={styles.userBtns}>
          <UserEdit />
          <UserPasswordEdit />
        </div>
      </div>
    </Col>
  )
}

export default UserInfo

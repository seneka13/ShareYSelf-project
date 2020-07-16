import React from 'react'
import { Col } from 'react-bootstrap'
import ProfileIcon from '../../components/Icons/ProfileIcon'
import styles from './user.module.scss'

function UserAvatar({ src, alt }) {
  return (
    <Col xs={12} md={4}>
      <div className={styles.avatarArea}>
        <div className={styles.avatarImg}>
          {src ? <img src={src} alt={alt} /> : <ProfileIcon className={styles.profIcon} />}
        </div>
        <label className={styles.avatarUpload} htmlFor="avatar">
          Загрузить
          <input
            id="avatar"
            type="file"
            name="avatar"
          />
        </label>
      </div>
    </Col>
  )
}

export default UserAvatar

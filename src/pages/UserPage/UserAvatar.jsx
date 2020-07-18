import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ProfileIcon from '../../components/Icons/ProfileIcon'
import { changeField } from '../../store/actions'
import styles from './user.module.scss'

function UserAvatar() {
  const dispatch = useDispatch()
  const { avatar } = useSelector((state) => ({
    avatar: state.fields.user.avatar,
  }))

  const addAvatar = (formField, value) => dispatch(changeField('user', formField, value))
  const handleImgUpload = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) reader.readAsDataURL(file)
    reader.onload = () => {
      addAvatar('avatar', reader.result)
    }
    reader.onerror = (error) => {
      console.log(error)
    }
  }

  return (
    <Col xs={12} md={5}>
      <div className={styles.avatarArea}>
        <div className={styles.avatarImg}>
          {avatar ? <img src={avatar} alt="avatar" /> : <ProfileIcon className={styles.profIcon} />}
        </div>
        <label className={styles.avatarUpload} htmlFor="avatar">
          {avatar ? 'Изменить' : 'Загрузить'}
          <input
            id="avatar"
            type="file"
            name="avatar"
            onChange={handleImgUpload}
          />
        </label>
      </div>
    </Col>
  )
}

export default UserAvatar

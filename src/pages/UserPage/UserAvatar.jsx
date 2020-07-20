import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ProfileIcon from '../../components/Icons/ProfileIcon'
import LoadSpunner from '../../components/LoadSpinner'
import { addAvatar, getData } from '../../store/actions'
import styles from './user.module.scss'

function UserAvatar() {
  const dispatch = useDispatch()
  const { user, success, err, loading } = useSelector((state) => ({
    user: state.auth.user,
    success: state.auth.avatar.success,
    loading: state.auth.avatar.loading,
    err: state.auth.avatar.error,
  }))
  const userId = user ? user.id : null
  const ava = user ? user.avatar : null

  const addAva = (id, body) => dispatch(addAvatar(id, body))
  const handleImgUpload = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) reader.readAsDataURL(file)
    reader.onload = () => {
      addAva(userId, { avatar: reader.result })
    }
    reader.onerror = (error) => {
      console.log(error)
    }
  }

  React.useEffect(() => {
    const getBody = () => dispatch(getData())
    getBody()
  }, [dispatch, success])

  return (
    <Col xs={12} md={5}>
      <div className={styles.avatarArea}>
        <div className={styles.avatarImg}>
          {ava ? <img src={ava} alt="avatar" /> : <ProfileIcon className={styles.profIcon} />}
        </div>
        <label className={styles.avatarUpload} htmlFor="avatar">
          {ava ? 'Изменить' : 'Загрузить'}
          <input
            id="avatar"
            type="file"
            name="avatar"
            onChange={handleImgUpload}
          />
        </label>
        <div className={styles.formErr}>
          {err && err}
        </div>
        {loading && <LoadSpunner />}
      </div>
    </Col>
  )
}

export default UserAvatar

import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../../components/Modal'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import styles from './user.module.scss'

function UserPasswordEdit() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))
  console.log(user)

  return (
    <Modal className={styles.userEditBtn} btnText="Изменить пароль">
      <h3>Изменить пароль</h3>
      <PrimeInput
        id="old password"
        type="text"
        placeholder="Введите старый пароль"
        name="eventForm"
      />
      <PrimeInput
        id="new password"
        type="text"
        placeholder="Введите пароль"
        name="eventForm"
      />
      <PrimeInput
        id="again password"
        type="text"
        placeholder="Повторите пароль"
        name="eventForm"
      />
      <PrimeBtn text="Подтвердить" className={styles.userEditBtn} />
    </Modal>
  )
}

export default UserPasswordEdit

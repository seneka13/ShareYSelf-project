import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../../components/Modal'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import { changeField, clearFields } from '../../store/actions'
import styles from './user.module.scss'

function UserEdit() {
  const dispatch = useDispatch
  const { user } = useSelector((state) => ({
    user: state.auth.user,
    username: state.fields.signup.username,
    password: state.fields.signup.password,
    firstname: state.fields.signup.firstname,
    lastname: state.fields.signup.lastname,
  }))

  const changeValue = (formField, value) => dispatch(changeField('signup', formField, value))
  const clear = () => dispatch(clearFields())
  console.log(user)

  return (
    <Modal className={styles.userEditBtn} btnText="Редактировать профиль">
      <h3>Изменит данные</h3>
      <PrimeInput
        id="userName"
        type="text"
        value={username}
        placeholder="Ваш логин"
        name="signUp"
        onChange={(value) => changeValue('username', value)}
      />
      <PrimeInput
        id="firstName"
        type="text"
        value={firstname}
        placeholder="Имя"
        name="signUp"
        onChange={(value) => changeValue('firstname', value)}
      />
      <PrimeInput
        id="lastName"
        type="text"
        value={lastname}
        placeholder="Фамилия"
        name="signUp"
        onChange={(value) => changeValue('lastname', value)}
      />
      <PrimeBtn text="Подтвердить" className={styles.userEditBtn} />
    </Modal>
  )
}

export default UserEdit

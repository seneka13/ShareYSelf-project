import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../../components/Modal'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import LoadSpunner from '../../components/LoadSpinner'
import { changeField, clearFields, userLogOut, editPassword } from '../../store/actions'
import styles from './user.module.scss'

function UserPasswordEdit() {
  const dispatch = useDispatch()
  const changeValue = (formField, value) => dispatch(changeField('editpassword', formField, value))
  const edPass = (id, body) => dispatch(editPassword(id, body))
  const { user, pass, err, success, loading } = useSelector((state) => ({
    user: state.auth.user,
    pass: state.fields.editpassword.password,
    err: state.auth.edit.error,
    success: state.auth.edit.success,
    loading: state.auth.edit.loading,
  }))
  const [formErr, setFormErr] = React.useState('')
  const [currentPass, setCurrentPass] = React.useState('')
  const [passRepeat, setPassRepeat] = React.useState('')
  const userPass = user ? user.password : null
  const userId = user ? user.id : null

  const handleEdit = () => {
    if (!pass || !passRepeat) setFormErr('Укажите новый пароль')
    else if (!currentPass) setFormErr('Укажите текущий пароль')
    else if (userPass !== currentPass) setFormErr('Неверный текущий пароль')
    else if (passRepeat !== pass) setFormErr('Пароли не совпадают')
    else {
      setFormErr('')
      edPass(userId, { password: pass })
    }
  }

  React.useEffect(() => {
    const clear = () => dispatch(clearFields())
    const logOut = () => dispatch(userLogOut())
    if (success) {
      logOut()
      clear()
    }
  }, [dispatch, success])

  return (
    <Modal className={styles.userEditBtn} btnText="Изменить пароль">
      <h3>Изменить пароль</h3>
      <PrimeInput
        id="old password"
        type="text"
        placeholder="Текущий пароль"
        name="eventForm"
        value={currentPass}
        onChange={(value) => setCurrentPass(value)}
      />
      <PrimeInput
        id="new password"
        type="text"
        placeholder="Введите пароль"
        name="eventForm"
        value={pass}
        onChange={(value) => changeValue('password', value)}
      />
      <PrimeInput
        id="again password"
        type="text"
        placeholder="Повторите пароль"
        name="eventForm"
        value={passRepeat}
        onChange={(value) => setPassRepeat(value)}
      />
      <div className={styles.formErr}>
        {(err && !formErr) ? err : formErr}
      </div>
      {loading && <LoadSpunner />}
      <PrimeBtn text="Подтвердить" className={styles.userEditBtn} onClick={handleEdit} />
    </Modal>
  )
}

export default UserPasswordEdit

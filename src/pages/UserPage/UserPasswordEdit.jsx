import React from 'react'
import { string, number, func, object, oneOfType } from 'prop-types'
import { connect } from 'react-redux'
import Modal from '../../components/Modal'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import { changeField, clearFields, userLogOut, editPassword } from '../../store/actions'
import styles from './user.module.scss'

function UserPasswordEdit({ user, pass, edPass, changeValue, clear, logOut, err }) {
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
      logOut()
      clear()
    }
  }

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
      <PrimeBtn text="Подтвердить" className={styles.userEditBtn} onClick={handleEdit} />
    </Modal>
  )
}

UserPasswordEdit.propTypes = {
  pass: oneOfType([string.isRequired, number.isRequired]),
  changeValue: func,
  edPass: func,
  logOut: func,
  clear: func,
  user: object,
  err: string,
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  pass: state.fields.editpassword.password,
  err: state.auth.edit.error,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('editpassword', formField, value)),
  clear: () => dispatch(clearFields()),
  logOut: () => dispatch(userLogOut()),
  edPass: (id, body) => dispatch(editPassword(id, body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPasswordEdit)
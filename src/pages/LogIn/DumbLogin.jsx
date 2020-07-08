import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { string, number, func, object, oneOfType } from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../../components/Logo'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import HelpLink from '../../components/HelpLink'
import { loginAction, changeField, clearFields } from '../../store/actions'
import styles from './login.module.scss'

function LogIn({
  username,
  password,
  changeValue,
  setBody,
  clear,
  err,
  user,
}) {
  const handleClick = () => {
    if (!username || !password || err) return
    setBody({ username, password })
    clear()
  }

  return (
    <div className={styles.loginPage}>
      <Container className="d-flex justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <form className={styles.loginForm}>
            <Logo />
            <PrimeInput
              id="userName"
              type="text"
              placeholder="Ваш логин"
              name="logIn"
              value={username}
              onChange={(value) => changeValue('username', value)}
            />
            <PrimeInput
              id="password"
              type="password"
              placeholder="Пароль"
              name="logIn"
              value={password}
              onChange={(value) => changeValue('password', value)}
            />
            <div className={styles.formErr}>{err}</div>
            {!username(<div className={styles.formErr}>Все поля обязательны для заполнения</div>)}
            <PrimeBtn
              text="Войти"
              onClick={handleClick}
            />
            <HelpLink />
          </form>
        </Col>
      </Container>
      {user && <Redirect to="/" />}
    </div>
  )
}

LogIn.propTypes = {
  username: string.isRequired,
  password: oneOfType([string.isRequired, number.isRequired]),
  changeValue: func,
  user: object,
  setBody: func,
  err: string,
  clear: func,
}

const mapStateToProps = (state) => ({
  username: state.fields.login.username,
  password: state.fields.login.password,
  err: state.auth.login.error,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('login', formField, value)),
  clear: () => dispatch(clearFields()),
  setBody: (body) => dispatch(loginAction(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

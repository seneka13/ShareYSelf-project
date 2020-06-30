import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { string, number, func, oneOfType } from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../../components/Logo'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import HelpLink from '../../components/HelpLink'
import { loginAction, changeField, clearFields, getData } from '../../store/actions'
import styles from './login.module.scss'

function LogIn({
  username,
  password,
  changeValue,
  setBody,
  getBody,
  clear,
  err,
}) {
  React.useEffect(() => {
    getBody()
  }, [getBody])

  const handleClick = () => {
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
            <PrimeBtn
              text="Войти"
              onClick={handleClick}
            />
            <HelpLink />
          </form>
        </Col>
      </Container>
      {localStorage.getItem('token') && <Redirect to="/" />}
    </div>
  )
}

LogIn.propTypes = {
  username: string.isRequired,
  password: oneOfType([string.isRequired, number.isRequired]),
  changeValue: func,
  getBody: func,
  setBody: func,
  err: string,
  clear: func,
}

const mapStateToProps = (state) => ({
  username: state.fields.signup.username,
  password: state.fields.signup.password,
  firstname: state.fields.signup.firstname,
  lastname: state.fields.signup.lastname,
  success: state.auth.signup.success,
  err: state.auth.login.error,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('signup', formField, value)),
  clear: () => dispatch(clearFields()),
  setBody: (body) => dispatch(loginAction(body)),
  getBody: () => dispatch(getData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

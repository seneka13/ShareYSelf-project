import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../components/Logo'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import HelpLink from '../../components/HelpLink'
import { loginAction, changeField } from '../../store/actions'
import LoadSpinner from '../../components/LoadSpinner'
import FormError from '../../components/FormError'
import styles from './login.module.scss'

function LogIn() {
  const dispatch = useDispatch()
  const changeValue = (formField, value) => dispatch(changeField('login', formField, value))
  const setBody = (body) => dispatch(loginAction(body))

  const { username, password, err, user, loading } = useSelector((state) => ({
    username: state.fields.login.username,
    password: state.fields.login.password,
    err: state.auth.login.error,
    loading: state.auth.login.loading,
    user: state.auth.user,
  }))

  const [formErr, setFormErr] = React.useState('')
  const handleClick = () => {
    if (!username || !password) setFormErr('Введите логин / пароль')
    else {
      setFormErr('')
      setBody({ username, password })
    }
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
            <FormError apiError={err} frontError={formErr} />
            <PrimeBtn
              text="Войти"
              onClick={handleClick}
              className={styles.btn}
            />
            <HelpLink />
          </form>
        </Col>
      </Container>
      {loading && <LoadSpinner />}
      {user && <Redirect to="/" />}
    </div>
  )
}

export default LogIn

import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { NavLink, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PrimeInput from '../../components/PrimeInput'
import Logo from '../../components/Logo'
import { changeField, signupAction } from '../../store/actions'
import FormError from '../../components/FormError'
import PrimeBtn from '../../components/PrimeBtn'
import LoadSpinner from '../../components/LoadSpinner'
import styles from './signup.module.scss'

function SignUp() {
  const dispatch = useDispatch()
  const changeValue = (formField, value) => dispatch(changeField('signup', formField, value))
  const creAccount = (body) => dispatch(signupAction(body))

  const { username, password, firstname, lastname, err, loading, user } = useSelector((state) => ({
    username: state.fields.signup.username,
    password: state.fields.signup.password,
    firstname: state.fields.signup.firstname,
    lastname: state.fields.signup.lastname,
    err: state.auth.signup.error,
    loading: state.auth.signup.loading,
    user: state.auth.user,
  }))

  const [formErr, setFormErr] = React.useState('')
  const handleClick = () => {
    if (!username || !lastname || !firstname || !password) setFormErr('Заполните все поля')
    else {
      setFormErr('')
      creAccount({ username, password, firstname, lastname })
    }
  }

  return (
    <div className={styles.signupPage}>
      <Container className="d-flex justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <form className={styles.signupForm}>
            <Logo />
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
            <PrimeInput
              id="password"
              type="password"
              value={password}
              placeholder="Пароль"
              name="signUp"
              onChange={(value) => changeValue('password', value)}
            />
            <FormError apiError={err} frontError={formErr} />
            <PrimeBtn
              text="Зарегестрироваться"
              onClick={handleClick}
              className={styles.btn}
            />
            <p className={styles.signupText}>
              Нажимая кнопку «Зарегистрироваться»,
              Вы принимаете условия
              Пользовательского соглашения.
            </p>
            <NavLink className={styles.signupRedir} to="/login" exact>
              Уже зарегестрированы? Войти тут
            </NavLink>
          </form>
        </Col>
      </Container>
      {loading && <LoadSpinner />}
      {user && <Redirect to="/" />}
    </div>
  )
}

export default SignUp

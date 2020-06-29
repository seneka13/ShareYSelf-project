import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import styles from './signup.module.scss'

function SignUp() {
  return (
    <div className={styles.signupPage}>
      <Container className="d-flex justify-content-center">
        <Col xs={12} md={8} lg={5}>
          <form className={styles.signupForm}>
            <PrimeInput id="userName" type="text" placeholder="Ваш логин" name="signUp" onChange={(value) => console.log(value)} />
            <PrimeInput id="firstName" type="text" placeholder="Имя" name="signUp" onChange={(value) => console.log(value)} />
            <PrimeInput id="lastName" type="text" placeholder="Фамилия" name="signUp" onChange={(value) => console.log(value)} />
            <PrimeInput id="password" type="password" placeholder="Пароль" name="signUp" onChange={(value) => console.log(value)} />
            <PrimeBtn text="Зарегестрироваться" />
            <p className={styles.signupText}>Нажимая кнопку «Зарегистрироваться», Вы принимаете условия
              Пользовательского соглашения.
            </p>
            <NavLink className={styles.signupRedir} to="/login" exact>
              Уже зарегестрированы? Войти тут
            </NavLink>
          </form>
        </Col>
      </Container>
    </div>
  )
}

export default SignUp

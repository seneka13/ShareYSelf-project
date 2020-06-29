import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import PrimeInput from '../../components/PrimeInput'
import PrimeBtn from '../../components/PrimeBtn'
import styles from './login.module.scss'

function LogIn() {
  return (
    <div className={styles.loginPage}>
      <Container className="d-flex justify-content-center">
        <Col xs={12} md={5}>
          <form className={styles.loginForm}>
            <NavLink className={styles.homePage} to="/" exact>ToMySelf</NavLink>
            <PrimeInput id="userName" type="text" placeholder="Ваш логин" name="logIn" onChange={(value) => console.log(value)} />
            <PrimeInput id="password" type="password" placeholder="Пароль" name="logIn" onChange={(value) => console.log(value)} />
            <PrimeBtn text="Войти" />
            <div className={styles.helpLink}>
              <NavLink className={styles.loginRedir} to="/signup" exact>
                Зарегестрироваться
              </NavLink>
              <NavLink className={styles.loginRedir} to="/" exact>
                Забыли пароль?
              </NavLink>
            </div>
          </form>
        </Col>
      </Container>
    </div>
  )
}

export default LogIn

import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './home.module.scss'

function Block2() {
  return (
    <div id="scroll" className={styles.homeBg2}>
      <Container className="pt-5">
        <Row className={styles.homeContent}>
          <Col xs={12} md={6} className={styles.homeInfo}>
            <h3>Создавайте события у нас</h3>
            <p className={styles.homeDesc}>ShareYSelf - сервис для создания событий.
              Для того чтобы начать пользоваться нашим сервисом вам необходимо пройти <NavLink to="/signup" exact>регистрацию</NavLink>.
            </p>
            <p>Если вы уже зарегестрированы, вы можете <NavLink to="/login" exact>авторизироваться</NavLink> и создать свое первое событие <a href="#scroll2">тут</a>.
            </p>
          </Col>
          <Col xs={12} md={6} className={styles.homeImg}>
            <img src='https://seneka13.github.io/ShareYSelf-project/img/meetup.png' alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Block2

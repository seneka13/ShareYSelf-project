import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import img from '../../img/meetup.png'
import styles from './home.module.scss'

function Block2() {
  return (
    <div id="scroll" className={styles.homeBg2}>
      <Container className="pt-5">
        <Row className={styles.homeContent}>
          <Col xs={12} md={6} className={styles.homeInfo}>
            <h3>Создавайте события у нас</h3>
            <p>ShareYSelf - сервис для создания событий.
              Для того чтобы начать пользоваться нашим сервисом вам необходимо пройти
              <NavLink to="/signup" exact> регистрацию</NavLink>
            </p>
          </Col>
          <Col xs={12} md={6} className={styles.homeImg}>
            <img src={img} alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Block2

import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import PageWrapper from '../PageWrapper'
import styles from './not.module.scss'

function NotFound() {
  return (
    <PageWrapper>
      <div className={styles.notFoundPage}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
              <h1 className={styles.title}>404</h1>
              <p className={styles.text}>К сожалению такой страницы нет на нашем сайте.
                Возможно вы ввели неправильный адрес или страница была удалена с сервера. <br />
                Вы можете вернуться на <NavLink to="/" exact>главную</NavLink> страницу.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default NotFound

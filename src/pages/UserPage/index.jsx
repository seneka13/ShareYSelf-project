import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import PageWrapper from '../../components/PageWrapper'
import styles from './user.module.scss'

function UserPage() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))

  console.log(user)
  return (
    <PageWrapper>
      <div className={styles.userBg}>
        <Container>
          <h1>Личный кабинет</h1>
          <Row>
            <Col xs={12} md={6}>
              <img src="" alt="" />
            </Col>
            <Col xs={12} md={6}>
              <div>{user && user.username}</div>
              <div>{user && user.firstname}</div>
              <div>{user && user.lastname}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default UserPage

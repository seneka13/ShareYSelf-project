import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserAvatar from './UserAvatar'
import UserInfo from './UserInfo'
import PageWrapper from '../../components/PageWrapper'
import styles from './user.module.scss'

function UserPage() {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))
  return (
    <PageWrapper>
      <div className={styles.userBg}>
        <Container>
          <div className={styles.userArea}>
            <Row className="pt-4">
              <UserAvatar />
              <UserInfo />
            </Row>
          </div>
        </Container>
        {!user && <Redirect to="/login" />}
      </div>
    </PageWrapper>
  )
}

export default UserPage

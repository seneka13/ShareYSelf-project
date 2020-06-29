import React from 'react'
import { Container } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import styles from './home.module.scss'

function HomePage() {
  return (
    <PageWrapper>
      <div className={styles.example}>
        <Container />
      </div>
    </PageWrapper>
  )
}

export default HomePage

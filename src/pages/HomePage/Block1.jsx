import React from 'react'
import { Container } from 'react-bootstrap'
import PageBtn from '../../components/PageBtn'
import styles from './home.module.scss'

function Block1() {
  return (
    <div className={styles.homeBg}>
      <Container>
        <div className={styles.homeContent}>
          <h1 className={styles.title}>Ваши мысли</h1>
          <p className={styles.subtitle}>это то чем стоит делится</p>
          <PageBtn text="Создать событие" />
        </div>
      </Container>
    </div>
  )
}

export default Block1
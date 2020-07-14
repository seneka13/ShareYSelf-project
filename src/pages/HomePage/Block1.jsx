import React from 'react'
import { Container } from 'react-bootstrap'
import PrimeBtn from '../../components/PrimeBtn'
import styles from './home.module.scss'

function Block1() {
  return (
    <Container>
      <div className={styles.homeContent}>
        <h1 className={styles.title}>Ваши мысли</h1>
        <p className={styles.subtitle}>- то чем стоит делиться</p>
        <a className={styles.scroll} href="#scroll">
          Подробнее
        </a>
      </div>
    </Container>
  )
}

export default Block1

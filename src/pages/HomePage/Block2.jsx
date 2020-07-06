import React from 'react'
import { Container } from 'react-bootstrap'
import EventForm from '../../components/EventForm'
import styles from './home.module.scss'

function Block2() {
  return (
    <div className={styles.homeBg2}>
      <Container>
        <div className={styles.homeContent}>
          <EventForm />
        </div>
      </Container>
    </div>
  )
}

export default Block2

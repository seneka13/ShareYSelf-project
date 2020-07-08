import React from 'react'
import { Container } from 'react-bootstrap'
import EventForm from '../../components/EventForm'
import styles from './home.module.scss'

function Block3() {
  return (
    <div className={styles.homeBg2}>
      <Container className="pt-5 pb-5">
        <div className={styles.homeContent}>
          <EventForm />
        </div>
      </Container>
    </div>
  )
}

export default Block3

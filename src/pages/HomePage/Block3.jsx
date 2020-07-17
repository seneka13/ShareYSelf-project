import React from 'react'
import { Container } from 'react-bootstrap'
import EventForm from '../../components/EventForm'
import styles from './home.module.scss'

function Block3() {
  return (
    <div id="scroll2" className={styles.homeBg3}>
      <Container className="pt-5 pb-5">
        <EventForm />
      </Container>
    </div>
  )
}

export default Block3

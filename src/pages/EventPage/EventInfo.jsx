import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { string, number, object, oneOfType } from 'prop-types'
import PrimeBtn from '../../components/PrimeBtn'
import { deleteEvent } from '../../store/actions'
import EditModalForm from '../../components/EditModalForm'

import PageWrapper from '../../components/PageWrapper'
import styles from './event.module.scss'

function EventInfo({ location, history }) {
  const { id, eventname, place, date, time, desc, author } = location.state.event
  const dispatch = useDispatch()
  const delEvent = (eventId) => dispatch(deleteEvent(eventId))

  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))

  const handleDelete = () => {
    delEvent(id)
    history.goBack()
  }

  const handleEdit = () => {
    delEvent(id)
    history.goBack()
  }

  return (
    <PageWrapper>
      <div className={styles.eventInfo}>
        <Container>
          <div className={styles.eventPage}>
            <h3>{eventname}</h3>
            <div>{place}</div>
            <div>{new Date(date).toLocaleDateString()} г.</div>
            <div>{time} ч.</div>
            <p>Событие: <br /> {desc}</p>
            <address>{author}</address>
            {(user && (`${user.firstname} ${user.lastname}`) === author)
          && (
          <>
            <EditModalForm />
            <PrimeBtn className={styles.delBtn} text="Удалить событие" onClick={handleDelete} />
          </>
          ) }
          </div>
        </Container>
      </div>
    </PageWrapper>
  )
}

EventInfo.propTypes = {
  id: oneOfType([string.isRequired, number.isRequired]),
  eventname: oneOfType([string.isRequired, number.isRequired]),
  place: oneOfType([string.isRequired, number.isRequired]),
  date: oneOfType([string.isRequired, number.isRequired]),
  time: oneOfType([string.isRequired, number.isRequired]),
  author: oneOfType([string.isRequired, number.isRequired]),
  location: object,
  history: object,
}

export default EventInfo

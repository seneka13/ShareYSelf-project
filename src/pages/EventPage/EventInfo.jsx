import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { string, number, object, oneOfType } from 'prop-types'
import PrimeBtn from '../../components/PrimeBtn'
import { deleteEvent } from '../../store/actions'
import EditModalForm from './EditModalForm'

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

  return (
    <PageWrapper>
      <div className={styles.eventInfo}>
        <Container>
          <div className={styles.eventInfoContent}>
            <h3 className={styles.eventname}>{eventname}</h3>
            <div className={styles.place}>Место проведения: {place}</div>
            <div className={styles.date}>Дата события: {new Date(date).toLocaleDateString()} г.</div>
            <div className={styles.time}>Время начала: {time} ч.</div>
            <p className={styles.desc}>Событие: <br /> {desc}</p>
            <address className={styles.author}>Автор: {author}</address>
            {(user && (`${user.firstname} ${user.lastname}`) === author)
          && (
          <div className={styles.controlBtns}>
            <EditModalForm
              id={id}
              author={author}
            />
            <PrimeBtn className={styles.delBtn} text="Удалить событие" onClick={handleDelete} />
          </div>
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

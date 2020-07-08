import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { string, number, oneOfType } from 'prop-types'
import { deleteEvent } from '../../store/actions'

import PageWrapper from '../../components/PageWrapper'
import styles from './event.module.scss'

function EventInfo(props) {
  const { id, eventname, place, date, time, desc, author } = props.location.state.event
  const dispatch = useDispatch()
  const delEvent = (eventId) => dispatch(deleteEvent(eventId))

  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }))

  const handleDelete = () => {
    delEvent(id)
  }

  return (
    <PageWrapper>
      <div className={styles.eventPage}>
        <div>{eventname}</div>
        <div>{place}</div>
        <div>{date}</div>
        <div>{time}</div>
        <div>{desc}</div>
        <div>{author}</div>
        {(user && (`${user.firstname} ${user.lastname}`) === author) && (<button type="button" onClick={handleDelete}>Delete</button>) }
        {!id && <Redirect to="/event" />}
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
}

export default EventInfo

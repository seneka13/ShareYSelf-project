import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { string, func, number, object, oneOfType } from 'prop-types'
import PrimeInput from '../PrimeInput'
import PrimeBtn from '../PrimeBtn'
import PrimeText from '../PrimeText'
import Logo from '../Logo'
import { changeField, clearFields, createEvent } from '../../store/actions'
import styles from './event.module.scss'

function EventForm({
  eventname,
  location,
  date,
  time,
  desc,
  changeValue,
  creEvent,
  clear,
  user,
}) {
  const handleClick = () => {
    if (!user) return
    const author = `${user.firstname} ${user.lastname}`
    creEvent({ eventname, location, date, time, desc, author })
    clear()
  }
  return (
    <form className={styles.eventForm}>
      <Logo />b
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <PrimeInput
            id="eventname"
            type="text"
            placeholder="Название события"
            name="eventForm"
            value={eventname}
            onChange={(value) => changeValue('eventname', value)}
          />
          <PrimeInput
            id="location"
            type="text"
            placeholder="Место проведения"
            name="eventForm"
            value={location}
            onChange={(value) => changeValue('location', value)}
          />
          <PrimeInput
            id="date"
            type="date"
            placeholder="Название события"
            name="eventForm"
            value={date}
            onChange={(value) => changeValue('date', value)}
          />
          <PrimeInput
            id="time"
            type="time"
            placeholder="Название события"
            name="eventForm"
            value={time}
            onChange={(value) => changeValue('time', value)}
          />
        </Col>
        <Col>
          <PrimeText
            id="eventText"
            placeholder="Описание"
            name="eventForm"
            value={desc}
            onChange={(value) => changeValue('desc', value)}
          />
        </Col>
      </Row>
      <PrimeBtn text="Создать" onClick={handleClick} />
    </form>
  )
}

EventForm.propTypes = {
  eventname: oneOfType([string.isRequired, number.isRequired]),
  location: oneOfType([string.isRequired, number.isRequired]),
  date: oneOfType([string.isRequired, number.isRequired]),
  time: oneOfType([string.isRequired, number.isRequired]),
  desc: oneOfType([string.isRequired, number.isRequired]),
  clear: func,
  creEvent: func,
  changeValue: func,
  user: object,
}

const mapStateToProps = (state) => ({
  eventname: state.fields.event.eventname,
  location: state.fields.event.location,
  date: state.fields.event.date,
  time: state.fields.event.time,
  desc: state.fields.event.desc,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('event', formField, value)),
  creEvent: (body) => dispatch(createEvent(body)),
  clear: () => dispatch(clearFields()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)

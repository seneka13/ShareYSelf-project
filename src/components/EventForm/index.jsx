import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { string, func, number, oneOfType } from 'prop-types'
import PrimeInput from '../PrimeInput'
import PrimeBtn from '../PrimeBtn'
import PrimeText from '../PrimeText'
import Logo from '../Logo'
import { changeField, clearFields } from '../../store/actions'
import styles from './event.module.scss'

function EventForm({
  eventname,
  location,
  date,
  time,
  desc,
  changeValue }) {
  return (
    <form className={styles.eventForm}>
      <Logo />
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
      <PrimeBtn text="Создать" onClick={() => console.log('ds')} />
    </form>
  )
}

EventForm.propTypes = {
  eventname: oneOfType([string.isRequired, number.isRequired]),
  location: oneOfType([string.isRequired, number.isRequired]),
  date: oneOfType([string.isRequired, number.isRequired]),
  time: oneOfType([string.isRequired, number.isRequired]),
  desc: oneOfType([string.isRequired, number.isRequired]),
  changeValue: func,
}

const mapStateToProps = (state) => ({
  event: state.fields.event.username,
  location: state.fields.event.password,
  date: state.fields.event.firstname,
  time: state.fields.event.lastname,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('event', formField, value)),
  clear: () => dispatch(clearFields()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)

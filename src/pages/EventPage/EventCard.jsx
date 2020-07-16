import React from 'react'
import { Col } from 'react-bootstrap'
import { string, number, oneOfType } from 'prop-types'
import { NavLink } from 'react-router-dom'
import img from '../../img/event.png'
import styles from './event.module.scss'

function EventCard({ id, eventname, place, date, time, desc, author }) {
  const [timeNow, setTime] = React.useState(new Date())
  const timeValue = new Date(`${date}T${time}`).getTime()
  const diff = timeValue - timeNow
  const daysTimer = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hoursTimer = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutesTimer = Math.floor((diff / 1000 / 60) % 60)
  const secondsTimer = Math.floor((diff / 1000) % 60)

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <Col xs={12} md={6} lg={4} className="mb-5">
      <NavLink to={{
        pathname: `/event/${id}`,
        state: { event: { id, eventname, place, date, time, desc, author } },
      }}
      >
        <div className={styles.eventCard}>
          <img src={img} alt="event" />
          <div className={styles.eventName}>{eventname}</div>
          <div className={styles.eventplace}>Место проведения: {place}</div>
          <div className={styles.eventDate}>
            Дата проведения: {new Date(date).toLocaleDateString()}
          </div>
          <div className={styles.eventDate}>Время проведения: {time}</div>
          {timeValue > timeNow
            ? (
              <div className={styles.eventTimer}>
                До начала: &nbsp;
                {daysTimer}д. &nbsp;
                {hoursTimer}ч.&nbsp;
                {minutesTimer}м.&nbsp;
                {secondsTimer}с.
              </div>
            ) : <div className={styles.eventPast}>Событие прошло</div>}
          <div className={styles.eventAuthor}>{author}</div>
        </div>
      </NavLink>
    </Col>
  )
}

EventCard.propTypes = {
  id: oneOfType([string.isRequired, number.isRequired]),
  eventname: oneOfType([string.isRequired, number.isRequired]),
  place: oneOfType([string.isRequired, number.isRequired]),
  date: oneOfType([string.isRequired, number.isRequired]),
  time: oneOfType([string.isRequired, number.isRequired]),
  author: oneOfType([string.isRequired, number.isRequired]),
  desc: oneOfType([string.isRequired, number.isRequired]),
}

export default EventCard

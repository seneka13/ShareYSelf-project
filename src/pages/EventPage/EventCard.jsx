import React from 'react'
import { Col } from 'react-bootstrap'
import img from '../../img/event.png'
import styles from './event.module.scss'

function EventPage({ id, eventname, location, date, time, desc, author }) {
  const [timeNow, setTime] = React.useState(new Date())
  const timeValue = new Date(`${date}T${time}`).getTime()
  const diff = timeValue - timeNow
  const daysTimer = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hoursTimer = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutesTimer = Math.floor((diff / 1000 / 60) % 60)
  const secondsTimer = Math.floor((diff / 1000) % 60)

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  return (
    <Col xs={12} md={6} lg={4} className="mb-5">
      <div className={styles.eventCard}>
        <img src={img} alt="event" />
        <div className={styles.eventName}>{eventname}</div>
        <div className={styles.eventLocation}>Место проведения: {location}</div>
        <div className={styles.eventDate}>Дата проведения: {new Date(date).toLocaleDateString()}</div>
        <div className={styles.eventDate}>Время проведения: {time}</div>
        {timeValue > timeNow && (<div>Времени до начала: {daysTimer}д. {hoursTimer}ч. {minutesTimer}м. {secondsTimer}с.</div>)}
        {timeValue < timeNow && (<div className={styles.eventPast}>Событие прошло</div>)}
        <div className={styles.eventAuthor}>{author}</div>
      </div>
    </Col>
  )
}

export default EventPage

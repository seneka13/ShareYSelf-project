import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { getEvents } from '../../store/actions'
import EventCard from './EventCard'
import styles from './event.module.scss'

function EventPage() {
  const { event } = useSelector((state) => ({
    event: state.event.events,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    const getEventList = () => dispatch(getEvents())
    getEventList()
  }, [dispatch])

  return (
    <PageWrapper>
      <div className={styles.eventPageBg}>
        <Container>
          <Row className={styles.eventPage}>
            {event.map((item) => {
              const { id, eventname, location, date, time, desc, author } = item.data
              return (
                <EventCard
                  key={id}
                  id={id}
                  eventname={eventname}
                  location={location}
                  date={date}
                  time={time}
                  desc={desc}
                  author={author}
                />
              )
            })}
          </Row>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default EventPage

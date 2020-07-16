import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { getEvents, succesReset } from '../../store/actions'
import PageWrapper from '../../components/PageWrapper'
import EventCard from './EventCard'
import styles from './event.module.scss'

function EventPage() {
  const { event, error } = useSelector((state) => ({
    event: state.event.events,
    error: state.event.get.error,
    success: state.event.create.success,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    const getEventList = () => dispatch(getEvents())
    getEventList()
    const resetSuccess = () => dispatch(succesReset())
    resetSuccess()
  }, [dispatch])

  return (
    <PageWrapper>
      <div className={styles.eventPageBg}>
        <Container>
          <Row>
            {event.map((item) => {
              const { id, eventname, place, date, time, desc, author } = item
              return (
                <EventCard
                  key={id}
                  id={id}
                  eventname={eventname}
                  place={place}
                  date={date}
                  time={time}
                  desc={desc}
                  author={author}
                />
              )
            })}
          </Row>
          {error && (<div className={styles.getError}>{error}</div>)}
        </Container>
      </div>
    </PageWrapper>
  )
}

export default EventPage

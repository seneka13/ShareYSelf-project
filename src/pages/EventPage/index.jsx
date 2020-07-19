import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { getEvents, succesReset, clearFields } from '../../store/actions'
import PageWrapper from '../../components/PageWrapper'
import EventCard from './EventCard'
import LoadSpinner from '../../components/LoadSpinner'
import styles from './event.module.scss'

function EventPage() {
  const { event, error, loading } = useSelector((state) => ({
    event: state.event.events,
    error: state.event.get.error,
    loading: state.event.get.loading,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    const getEventList = () => dispatch(getEvents())
    getEventList()
    const clear = () => dispatch(clearFields())
    clear()
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
          {loading && <LoadSpinner />}
          {error && (<div className={styles.getError}>{error}</div>)}
        </Container>
      </div>
    </PageWrapper>
  )
}

export default EventPage

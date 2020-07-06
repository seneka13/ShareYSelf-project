import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { getEvents } from '../../store/actions'
import styles from './event.module.scss'

function EventPage() {
  const events = useSelector((state) => ({
    event: state.event.events,
  }))
  console.log(events)

  const dispatch = useDispatch()

  React.useEffect(() => {
    const getEventList = () => dispatch(getEvents())
    getEventList()
  }, [dispatch])
  return (
    <PageWrapper>
      <Container>
        <div className={styles.eventList} />
      </Container>
    </PageWrapper>
  )
}

export default EventPage

import React from 'react'
import { string, func, number, oneOfType } from 'prop-types'
import { connect } from 'react-redux'
import PrimeBtn from '../PrimeBtn'
import PrimeInput from '../PrimeInput'
import PrimeText from '../PrimeText'
import styles from './modal.module.scss'
import { changeField, clearFields, editEvent } from '../../store/actions'

function EditModalForm({
  eventname,
  place,
  date,
  time,
  desc,
  err,
  changeValue,
}) {
  const [show, setShow] = React.useState(false)
  const isVisible = show ? styles.isShow : styles.notShow
  const handleShow = () => setShow(!show)
  const modalRef = React.useRef(null)

  React.useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current.contains(e.target)) {
        return
      }
      if (show === true) setShow(false)
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [show])

  return (
    <>
      <PrimeBtn className={styles.editBtn} text="Редактировать" onClick={handleShow} />
      <div role="form" className={isVisible}>
        <div ref={modalRef} className={styles.modal}>
          <PrimeInput
            id="eventname"
            type="text"
            placeholder="Название события"
            name="eventForm"
            value={eventname}
            onChange={(value) => changeValue('eventname', value)}
          />
          <PrimeInput
            id="place"
            type="text"
            placeholder="Место проведения"
            name="eventForm"
            value={place}
            onChange={(value) => changeValue('place', value)}
          />
          <PrimeInput
            id="date"
            type="date"
            name="eventForm"
            value={date}
            onChange={(value) => changeValue('date', value)}
          />
          <PrimeInput
            id="time"
            type="time"
            name="eventForm"
            value={time}
            onChange={(value) => changeValue('time', value)}
          />
          <PrimeText
            id="eventText"
            placeholder="Описание"
            name="eventForm"
            value={desc}
            onChange={(value) => changeValue('desc', value)}
          />
          <div className={styles.formErr}>{err}</div>
          <PrimeBtn className={styles.editBtn} text="Отправить" />
        </div>
      </div>
    </>
  )
}

EditModalForm.propTypes = {
  eventname: oneOfType([string.isRequired, number.isRequired]),
  place: oneOfType([string.isRequired, number.isRequired]),
  date: oneOfType([string.isRequired, number.isRequired]),
  time: oneOfType([string.isRequired, number.isRequired]),
  desc: oneOfType([string.isRequired, number.isRequired]),
  err: string,
  changeValue: func,
}

const mapStateToProps = (state) => ({
  eventname: state.fields.event.eventname,
  place: state.fields.event.place,
  date: state.fields.event.date,
  time: state.fields.event.time,
  desc: state.fields.event.desc,
  err: state.event.create.error,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('event', formField, value)),
  edEvent: (id, body) => dispatch(editEvent(id, body)),
  clear: () => dispatch(clearFields()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditModalForm)

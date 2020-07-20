import React from 'react'
import { string, number, oneOfType } from 'prop-types'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PrimeBtn from '../../../components/PrimeBtn'
import PrimeInput from '../../../components/PrimeInput'
import PrimeText from '../../../components/PrimeText'
import Modal from '../../../components/Modal'
import styles from './modal.module.scss'
import LoadSpinner from '../../../components/LoadSpinner'
import { changeField, editEvent } from '../../../store/actions'

function EditForm({ id, author, defEvent, defPlace, defDate, defTime, defDesc }) {
  const dispatch = useDispatch()
  const changeValue = React.useCallback((formField, value) => dispatch(changeField('editevent', formField, value)),
    [dispatch])
  const edEvent = (eventId, body) => dispatch(editEvent(eventId, body))

  const { eventname, place, date, time, desc, err, success, loading } = useSelector((state) => ({
    eventname: state.fields.editevent.eventname,
    place: state.fields.editevent.place,
    date: state.fields.editevent.date,
    time: state.fields.editevent.time,
    desc: state.fields.editevent.desc,
    err: state.event.edit.error,
    success: state.event.edit.success,
    loading: state.event.edit.loading,
  }))

  const [formErr, setFormErr] = React.useState('')
  React.useEffect(() => {
    changeValue('eventname', defEvent)
    changeValue('place', defPlace)
    changeValue('date', defDate)
    changeValue('time', defTime)
    changeValue('desc', defDesc)
  }, [changeValue, defDate, defDesc, defEvent, defPlace, defTime])

  const handleEdit = () => {
    if (!eventname || !place || !date || !time || !desc) setFormErr('Поля не должны оставаться пустыми')
    else {
      const body = { eventname, place, date, time, desc, author }
      setFormErr('')
      edEvent(id, body)
    }
  }

  return (
    <Modal btnText="Редактировать" className={styles.editBtn}>
      <form className={styles.editForm}>
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
        <div className={styles.formErr}>{(err && !formErr) ? err : formErr}</div>
        {loading && <LoadSpinner />}
        {success && <Redirect to="/event" />}
        <PrimeBtn className={styles.editBtn} text="Отправить" onClick={handleEdit} />
      </form>
    </Modal>
  )
}

EditForm.propTypes = {
  id: oneOfType([string.isRequired, number.isRequired]),
  author: oneOfType([string.isRequired, number.isRequired]),
  defEvent: oneOfType([string.isRequired, number.isRequired]),
  defPlace: oneOfType([string.isRequired, number.isRequired]),
  defDate: oneOfType([string.isRequired, number.isRequired]),
  defTime: oneOfType([string.isRequired, number.isRequired]),
  defDesc: oneOfType([string.isRequired, number.isRequired]),
}

export default EditForm

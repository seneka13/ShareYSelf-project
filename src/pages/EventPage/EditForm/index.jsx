import React from 'react'
import { string, func, number, oneOfType, bool } from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PrimeBtn from '../../../components/PrimeBtn'
import PrimeInput from '../../../components/PrimeInput'
import PrimeText from '../../../components/PrimeText'
import Modal from '../../../components/Modal'
import styles from './modal.module.scss'
import LoadSpinner from '../../../components/LoadSpinner'
import { changeField, clearFields, editEvent } from '../../../store/actions'

function EditForm({ eventname, place, date, time, desc, err, id, author, changeValue, edEvent,
  clear, defEvent, defPlace, defDate, defTime, defDesc, success, loading }) {
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
      clear()
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
  eventname: oneOfType([string.isRequired, number.isRequired]),
  place: oneOfType([string.isRequired, number.isRequired]),
  date: oneOfType([string.isRequired, number.isRequired]),
  time: oneOfType([string.isRequired, number.isRequired]),
  desc: oneOfType([string.isRequired, number.isRequired]),
  id: oneOfType([string.isRequired, number.isRequired]),
  author: oneOfType([string.isRequired, number.isRequired]),
  defEvent: oneOfType([string.isRequired, number.isRequired]),
  defPlace: oneOfType([string.isRequired, number.isRequired]),
  defDate: oneOfType([string.isRequired, number.isRequired]),
  defTime: oneOfType([string.isRequired, number.isRequired]),
  defDesc: oneOfType([string.isRequired, number.isRequired]),
  edEvent: func,
  clear: func,
  changeValue: func,
  err: string,
  success: bool,
  loading: bool,
}

const mapStateToProps = (state) => ({
  eventname: state.fields.editevent.eventname,
  place: state.fields.editevent.place,
  date: state.fields.editevent.date,
  time: state.fields.editevent.time,
  desc: state.fields.editevent.desc,
  err: state.event.edit.error,
  success: state.event.edit.success,
  loading: state.event.edit.loading,
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: (formField, value) => dispatch(changeField('editevent', formField, value)),
  edEvent: (id, body) => dispatch(editEvent(id, body)),
  clear: () => dispatch(clearFields()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)

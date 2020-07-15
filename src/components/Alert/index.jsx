import React from 'react'
import SweetAlert from 'sweetalert2-react'
import styles from './alert.module.scss'

function EventAlert({ alert }) {
  return (
    <div>
      <SweetAlert
        show={alert}
        type="success"
        text="Событие успешно создано"
        confirmButtonColor="#2ca25f"
        focusConfirm={false}
        onConfirm={() => !alert}
        customClass={styles.alert}
      />
    </div>
  )
}

export default EventAlert

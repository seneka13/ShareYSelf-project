import React from 'react'
import SweetAlert from 'sweetalert2-react'

function EventAlert() {
  const [alert, setAlert] = React.useState(false)
  return (
    <div>
      <button type="button" onClick={() => setAlert(true)}>Alert</button>
      <SweetAlert
        show={alert}
        type="success"
        text="Событие успешно создано"
        confirmButtonColor="#2ca25f"
        focusConfirm={false}
        onConfirm={() => setAlert(false)}
      />
    </div>
  )
}

export default EventAlert

import React from 'react'
import { string } from 'prop-types'
import styles from './error.module.scss'

function FormError({ apiError, frontError }) {
  return (
    <div className={styles.formErr}>
      {(apiError && !frontError) ? apiError : frontError}
    </div>
  )
}

FormError.propTypes = {
  apiError: string,
  frontError: string,
}

export default FormError

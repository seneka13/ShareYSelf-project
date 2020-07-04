import React from 'react'
import { func, string } from 'prop-types'
import styles from './btn.module.scss'

function PageBtn({ text, onClick }) {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      {text}
    </button>
  )
}

PageBtn.propTypes = {
  text: string.isRequired,
  onClick: func,
}

export default PageBtn

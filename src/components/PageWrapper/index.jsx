import React from 'react'
import { node } from 'prop-types'
import Menu from '../Menu'
import styles from './page.module.scss'

function PageWrapper({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>ToMySelf</h1>
        <Menu />
      </header>
      {children}
    </>
  )
}

PageWrapper.propTypes = {
  children: node,
}

export default PageWrapper

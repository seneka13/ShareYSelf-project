import React from 'react'
import { node } from 'prop-types'
import Menu from '../Menu'
import Logo from '../Logo'
import styles from './page.module.scss'

function PageWrapper({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Logo />
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

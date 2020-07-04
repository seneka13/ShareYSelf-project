import React from 'react'
import { Container } from 'react-bootstrap'
import Socials from '../Socials'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className="pt-5">
        <Socials />
      </Container>
    </footer>
  )
}

export default Footer

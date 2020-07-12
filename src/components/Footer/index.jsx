import React from 'react'
import { Container } from 'react-bootstrap'
import Socials from '../Socials'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContent}>
        <div>&copy;2020 It Academy. <br /> Все права защищены</div>
        <Socials />
      </Container>
    </footer>
  )
}

export default Footer

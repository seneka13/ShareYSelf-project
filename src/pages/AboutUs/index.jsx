import React from 'react'
import { Container, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import AboutInfo from './AboutInfo'
import styles from './about.module.scss'

function AboutUs() {
  return (
    <PageWrapper>
      <div className={styles.aboutPage}>
        <Container>
          <Col>
            <AboutInfo />
          </Col>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default AboutUs

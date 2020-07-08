import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import styles from './home.module.scss'

function HomePage() {
  return (
    <PageWrapper>
      <div className={styles.homeBg}>
        <Block1 />
        <Block2 />
        <Block3 />
      </div>
    </PageWrapper>
  )
}

export default HomePage

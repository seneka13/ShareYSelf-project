import React from 'react'
import { useDispatch } from 'react-redux'
import PageWrapper from '../../components/PageWrapper'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import { clearFields } from '../../store/actions'

function HomePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const clear = () => dispatch(clearFields())
    clear()
  }, [dispatch])

  return (
    <PageWrapper>
      <Block1 />
      <Block2 />
      <Block3 />
    </PageWrapper>
  )
}

export default HomePage

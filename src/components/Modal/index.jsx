import React from 'react'
import { node, string } from 'prop-types'
import { useDispatch } from 'react-redux'
import PrimeBtn from '../PrimeBtn'
import styles from './modal.module.scss'

function Modal({ children, btnText, className }) {
  const [show, setShow] = React.useState(false)
  const isVisible = show ? styles.isShow : styles.notShow
  const handleShow = () => setShow(!show)
  const modalRef = React.useRef(null)

  const dispatch = useDispatch()

  React.useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current.contains(e.target)) {
        return
      }
      if (show === true) setShow(false)
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [dispatch, show])

  return (
    <>
      <PrimeBtn className={className} text={btnText} onClick={handleShow} />
      <div className={isVisible}>
        <div ref={modalRef} className={styles.modal}>
          {children}
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  children: node,
  btnText: string,
}

export default Modal

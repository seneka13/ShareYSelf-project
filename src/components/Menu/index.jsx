import React from 'react'
import Burger from 'react-css-burger'
import Nav from '../Nav'
import AuthNav from '../AuthNav'
import styles from './menu.module.scss'

function Menu() {
  const [visible, setVisible] = React.useState(false)
  const isVisible = visible ? styles.navVisible : styles.nav
  const burgerRef = React.useRef(null)

  React.useEffect(() => {
    const handleClick = (e) => {
      if (burgerRef.current.contains(e.target)) {
        return
      }
      setVisible(false)
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [setVisible])

  return (
    <div ref={burgerRef}>
      <ul className={isVisible}>
        <Nav />
        <AuthNav />
      </ul>
      <div className={styles.burgerBtn}>
        <Burger
          onClick={() => setVisible(!visible)}
          active={visible}
          burger="emphatic"
          color="#f9f9f9"
          hoverOpacity={0.6}
          scale={0.8}
          style={{ outline: 'none' }}
        />
      </div>
    </div>
  )
}

export default Menu

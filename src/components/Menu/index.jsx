import React from 'react'
import { node } from 'prop-types'
import Burger from 'react-css-burger'
import { NavLink } from 'react-router-dom'
import Nav from '../Nav'
import styles from './menu.module.scss'
import LoginIcon from '../Icons/LoginIcon'

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
        <li><NavLink to="/login" className={styles.login}><LoginIcon className={styles.icon} />Войти</NavLink></li>
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

Menu.propTypes = {
  children: node,
}

export default Menu

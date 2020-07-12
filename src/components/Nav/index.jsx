import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.scss'

function Nav() {
  const navItems = [
    { id: 0, to: '/', text: 'Главная' },
    { id: 1, to: '/event', text: 'События' },
    { id: 2, to: '/about', text: 'О нас' },
  ]

  return (
    <>
      {navItems.map((item) => (
        <li key={item.id}>
          <NavLink
            activeClassName={styles.active}
            exact
            to={item.to}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </>
  )
}

export default Nav

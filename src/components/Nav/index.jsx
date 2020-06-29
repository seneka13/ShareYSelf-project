import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.scss'

function Nav() {
  const navItems = [
    { id: 0, to: '/', text: 'Главная' },
    { id: 1, to: '/about', text: 'О нас' },
    { id: 2, to: '/articles', text: 'Статьи' },
    { id: 3, to: '/video', text: 'Видео' },
    { id: 4, to: '/image', text: 'Картинки' },
    { id: 5, to: '/signup', text: 'Регистрация' },
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

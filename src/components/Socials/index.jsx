import React from 'react'
import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import Youtube from '../Icons/Youtube'
import styles from './socials.module.scss'

function Socials() {
  const socialLinks = [
    { id: 1, social: Facebook, href: 'https://www.facebook.com' },
    { id: 2, social: Twitter, href: 'https://www.twitter.com' },
    { id: 3, social: Instagram, href: 'https://www.instagram.com' },
    { id: 4, social: Youtube, href: 'https://www.youtube.com' },
  ]

  return (
    <>
      {socialLinks.map((item) => {
        const Icon = item.social
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon className={styles.icon} />
          </a>
        )
      })}
    </>
  )
}

export default Socials

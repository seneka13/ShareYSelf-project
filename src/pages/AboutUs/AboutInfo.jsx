import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './about.module.scss'
import PrimeBtn from '../../components/PrimeBtn'

function AboutInfo() {
  return (
    <div className={styles.aboutInfo}>
      <h2 className={styles.title}>О нас</h2>
      <p className={styles.desc}>
        Это текст. Нажмите один раз и выберите «Редактировать текст»
        или просто кликните дважды, чтобы добавить свой текст и
        настроить шрифт. Вы можете переместить его в любое место
        на странице. Расскажите посетителям сайта о себе.Здесь
        будет удачно смотреться текст о вашей компании и услугах.
      </p>
      <p className={styles.desc}>
        Используйте эту возможность, чтобы выгодно представить
        себя и свою компанию клиентам. Расскажите интересную
        историю, например, как вам в голову пришла идея
        собственного дела, и объясните, в чем заключается ваше
        преимущество перед конкурентами. Приводите увлекательные
        факты и цифры. Не забудьте про ключевые слова, по которым
        ваш сайт найдут в поисковых системах.
      </p>
      <NavLink to="/event" exact>Смотреть события</NavLink>
    </div>
  )
}

export default AboutInfo

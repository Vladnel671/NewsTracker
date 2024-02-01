import React from 'react'
import styles from '../../styles/main.module.scss'
import { NavLink } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu.tsx'
import NewsSearch from '../NewsSearch.tsx'
import { scrollToTop } from '../../utils/NewsUtils.ts'

const Header: React.FC = () => (
  <header className={styles.HeaderBlock}>
    <NavLink
      draggable={false}
      onClick={scrollToTop}
      className={styles.HeaderLink}
      to='/'
      role='link'
    >
      <h1>NewsTracker</h1>
    </NavLink>
    <NewsSearch />
    <div className={styles.NavBarMain}>
      <BurgerMenu />
    </div>
  </header>
)

export default Header

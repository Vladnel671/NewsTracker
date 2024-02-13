import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../../styles/main.module.scss'
import { scrollToTop } from '../../utils/NewsUtils.ts'
import BurgerMenu from '../BurgerMenu.tsx'
import NewsSearch from '../NewsSearch.tsx'

const Header: React.FC = () => (
  <header className={styles['header-block']}>
    <NavLink
      draggable={false}
      onClick={scrollToTop}
      className={styles['header-link']}
      to="/"
      role="link"
    >
      <h1>NewsTracker</h1>
    </NavLink>
    <NewsSearch />
    <div className={styles['navbar-main']}>
      <BurgerMenu />
    </div>
  </header>
)

export default Header

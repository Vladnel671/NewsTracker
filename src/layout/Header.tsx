import React from 'react'
import { NavLink } from 'react-router-dom'

import BurgerMenu from '../components/ui/BurgerMenu.tsx'
import NewsSearch from '../components/ui/NewsSearch.tsx'
import styles from '../styles/main.module.scss'
import { scrollToTop } from '../utils/NewsUtils.ts'

const Header: React.FC = () => (
  <header className={styles['header-block']}>
    <div
      style={{
        display: 'flex',
        width: '1140px',
        maxWidth: '1140px',
        justifyContent: 'space-between',
      }}
    >
      <NavLink
        draggable={false}
        onClick={scrollToTop}
        className={styles['header-link']}
        to="/"
        role="link"
      >
        <h1 translate="no">NewsTracker</h1>
      </NavLink>
      <NewsSearch />
      <div className={styles['navbar-main']}>
        <BurgerMenu />
      </div>
    </div>
  </header>
)

export default Header

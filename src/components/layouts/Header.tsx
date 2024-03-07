import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../../styles/main.module.scss'
import { scrollToTop } from '../../utils/NewsUtils.ts'
import BurgerMenu from '../ui/BurgerMenu.tsx'
import NewsSearch from '../ui/NewsSearch.tsx'

const Header: React.FC = () => (
  <header className={styles['header-block']}>
    <div
      style={{
        display: 'flex',
        width: '1200px',
        maxWidth: '1200px',
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
        <h1>NewsTracker</h1>
      </NavLink>
      <NewsSearch />
      <div className={styles['navbar-main']}>
        <BurgerMenu />
      </div>
    </div>
  </header>
)

export default Header

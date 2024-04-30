import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import styles from '../styles/main.module.scss'

const Layout: React.FC = () => (
  <>
    <Header />
    <main className={styles['main-block']}>
      <Outlet />
    </main>
    <Footer />
  </>
)

export default Layout

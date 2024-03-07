import React from 'react'

import styles from '../../styles/main.module.scss'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons/index'

const Footer: React.FC = () => (
  <footer className={styles['footer-block']}>
    <h2 className={styles['footer-logo']}>NewsTracker</h2>
    <nav className={styles['footer-socials']}>
      <ul>
        <li>
          <a className={styles['social-icon']}>
            <FacebookIcon />
          </a>
          <a className={styles['social-icon']}>
            <InstagramIcon />
          </a>
          <a className={styles['social-icon']}>
            <YoutubeIcon />
          </a>
          <a className={styles['social-icon']}>
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </nav>
    <address>
      <p className={styles.copyright}>
        ©&nbsp;{new Date().getFullYear()}
        &nbsp;Vladislav&nbsp;Nelipovich.&nbsp;All&nbsp;rights&nbsp;reserved.
      </p>
    </address>
  </footer>
)

export default Footer

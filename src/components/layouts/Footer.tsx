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
    <nav className={styles['socials']}>
      <ul className={styles['socials-list']}>
        <li className={styles['social-icon']}>
          <a>
            <FacebookIcon className={styles['icon']} />
          </a>
        </li>
        <li className={styles['social-icon']}>
          <a>
            <TwitterIcon className={styles['icon']} />
          </a>
        </li>
        <li className={styles['social-icon']}>
          <a>
            <InstagramIcon className={styles['icon']} />
          </a>
        </li>
        <li className={styles['social-icon']}>
          <a>
            <YoutubeIcon className={styles['icon']} />
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

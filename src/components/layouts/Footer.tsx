import React from 'react'

import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import youtubeIcon from '../../assets/icons/youtube.svg'
import styles from '../../styles/main.module.scss'

const socialIcons = [
  { src: facebookIcon, alt: 'facebook-icon' },
  { src: twitterIcon, alt: 'twitter-icon' },
  { src: instagramIcon, alt: 'instagram-icon' },
  { src: youtubeIcon, alt: 'youtube-icon' },
]

const Footer: React.FC = () => (
  <footer className={styles['footer-block']}>
    <h2 className={styles['footer-logo']}>NewsTracker</h2>
    <nav className={styles['footer-section']}>
      {socialIcons.map((icon, index) => (
        <a className={styles['soc1als-icon-wrapper']} key={index}>
          <img
            draggable={false}
            className={styles['footer-icon']}
            src={icon.src}
            alt={icon.alt}
          />
        </a>
      ))}
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

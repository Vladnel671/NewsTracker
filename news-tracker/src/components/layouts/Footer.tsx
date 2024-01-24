import React from 'react';
import styles from '../../styles/main.module.scss';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';

const Footer: React.FC = () => {
    return (
        <footer className={styles.FooterBlock}>
            <h2 className={styles.footerLogo}>NewsTracker</h2>
            <div className={styles.FooterSection}>
                <div className={styles.socialsIconWrapper}>
                    <img className={styles.footerIcon} src={facebookIcon} alt="facebook-icon"/>
                </div>
                <div className={styles.socialsIconWrapper}>
                    <img className={styles.footerIcon} src={twitterIcon} alt="twitter-icon"/>
                </div>
                <div className={styles.socialsIconWrapper}>
                    <img className={styles.footerIcon} src={instagramIcon} alt="instagram-icon"/>
                </div>
                <div className={styles.socialsIconWrapper}>
                    <img className={styles.footerIcon} src={youtubeIcon} alt="youtube-icon"/>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
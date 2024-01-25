import React from 'react';
import styles from '../../styles/main.module.scss';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';

const socialIcons = [
    {src: facebookIcon, alt: "facebook-icon"},
    {src: twitterIcon, alt: "twitter-icon"},
    {src: instagramIcon, alt: "instagram-icon"},
    {src: youtubeIcon, alt: "youtube-icon"}
];

const Footer: React.FC = () => {
    return (
        <footer className={styles.FooterBlock}>
            <h2 className={styles.footerLogo}>NewsTracker</h2>
            <nav className={styles.FooterSection}>
                {socialIcons.map((icon, index) => (
                    <div className={styles.soc1alsIconWrapper} key={index}>
                        <img className={styles.footerIcon} src={icon.src} alt={icon.alt}/>
                    </div>
                ))}
            </nav>
            <address>
                <p className={styles.copyright}>©&nbsp;{new Date().getFullYear()}&nbsp;Name.&nbsp;All&nbsp;rights&nbsp;reserved.</p>
            </address>
        </footer>
    );
};

export default Footer;

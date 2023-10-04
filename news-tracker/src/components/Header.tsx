import React from 'react';
import styles from "../App.module.scss";

const Header: React.FC= () => {
    return (
        <div>
            <header className={styles.HeaderBlock}>NewsTracker</header>
        </div>
    );
};

export default Header;
import React from 'react';
import styles from "../App.module.scss";

const Header: React.FC = () => {
    return (
        <header className={styles.HeaderBlock}>
            <h1>NewsTracker</h1>
            <div className={styles.NavBarMain}>
                <a>Top and breaking headlines</a>
                <a>All news</a>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import styles from "../App.module.scss";
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.HeaderBlock}>
            <NavLink className={styles.newsLink} to="/allnews"><h1>NewsTracker</h1></NavLink>
            <div className={styles.NavBarMain}>
                <NavLink className={styles.newsLink} to="/topheadlines">Top and breaking headlines</NavLink>
                <NavLink className={styles.newsLink} to="/allnews">All news</NavLink>
            </div>
        </header>
    );
};

export default Header;
import React from 'react'
import styles from '../../styles/main.module.scss'
import {NavLink} from "react-router-dom"
import BurgerMenu from "../BurgerMenu.tsx"
import SearchInput from "../SearchInput.tsx";

const Header: React.FC = () => {
    return (
        <header className={styles.HeaderBlock}>
            <NavLink className={styles.HeaderLink} to="/topheadlines"><h1>NewsTracker</h1></NavLink>
            <SearchInput />
            <div className={styles.NavBarMain}>
                <BurgerMenu/>
            </div>
        </header>
    );
};

export default Header

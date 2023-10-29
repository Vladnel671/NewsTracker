import React, {ChangeEvent, useCallback, useState} from 'react';
import styles from '../../styles/main.module.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {IconButton, TextField} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";
import {fetchNewsData} from "../../utils/NewsUtils.ts";
import {setLoadingNews, setNews} from "../../store/actions.ts";
import {useDispatch} from "react-redux";
import BurgerMenu from "./BurgerMenu/BurgerMenu.tsx";
import {ALL_NEWS_URL, API_KEY} from "../../constant";

const Header: React.FC = () => {

    const [keyword, setKeyword] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }, [])

    const getData = useCallback(async () => {
        if (keyword.trim() === '') {
            navigate('/allnews');
        }

        navigate('/allnews');
        const URL = `${ALL_NEWS_URL}${API_KEY}&q=${keyword}`
        try {
            dispatch(setLoadingNews(true));
            const filteredNews = await fetchNewsData(URL)
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false))
            setKeyword("")
        } catch (error) {
            console.log(error);
            dispatch(setLoadingNews(false))
        }
    }, [keyword, dispatch])

    return (
        <header className={styles.HeaderBlock}>
            <NavLink className={styles.HeaderLink} to="/topheadlines"><h1>NewsTracker</h1></NavLink>
            <div className={styles.searchInputBlock}>
                <IconButton onClick={getData} aria-label="search">
                    <SearchIcon color='primary'/>
                </IconButton>
                <TextField
                    id="searchField"
                    color='secondary'
                    className={styles.searchInput}
                    type="search"
                    value={keyword}
                    onChange={searchHandler}
                    placeholder="Search..."
                />
            </div>
            <div className={styles.NavBarMain}>
                <div className={styles.BurgerMenuBlock}>
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, {ChangeEvent, useState} from 'react';
import styles from "../../App.module.css";
import {NavLink} from "react-router-dom";
import {IconButton, TextField} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";
import {fetchNewsData} from "../../utils/NewsUtils.ts";
import {setLoadingNews, setNews} from "../../store/actions.ts";
import {useDispatch} from "react-redux";

const Header: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('')
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = ` https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}&pageSize=10`;//&pageSize=10

    const dispatch = useDispatch();
    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const getData = async () => {
        try {
            dispatch(setLoadingNews(true));
            const filteredNews = await fetchNewsData(URL);
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false));
            setKeyword("")
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
            dispatch(setLoadingNews(false));
        }
    };

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
                <NavLink className={styles.HeaderLink} to="/topheadlines">Top and breaking headlines</NavLink>
                <NavLink className={styles.HeaderLink} to="/allnews">All news</NavLink>
            </div>
        </header>
    );
};

export default Header;
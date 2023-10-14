import React, {ChangeEvent, useState} from 'react';
import styles from "../../../App.module.css";
import {IconButton, TextField} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";
import {INewsData, RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {fetchNewsData} from "../../../utils/NewsUtils.ts";
import {useDispatch, useSelector} from "react-redux";
import {SetNewsAC} from "../../../store/actions.ts";

const AllNews: React.FC = () => {

    const [keyword, setKeyword] = useState<string>('')
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = ` https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}&pageSize=10`;//&pageSize=10

    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.news);

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const getData = async () => {
        try {
            const filteredNews = await fetchNewsData(URL);
            dispatch(SetNewsAC(filteredNews));
            setKeyword("")
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
        }
    };

    return (
        <>
            <div className={styles.searchInputBlock}>
                <TextField
                    color='secondary'
                    className={styles.searchInput}
                    type="search"
                    value={keyword}
                    onChange={searchHandler}
                    placeholder="Search..."
                />
                <IconButton onClick={getData} aria-label="search">
                    <SearchIcon color='primary'/>
                </IconButton>
            </div>
            <div className={styles.News}>
                {news ? (news.length === 0 ? (<span className={styles.spinner}></span>) : (news.map((news: INewsData) => (
                    <NewsItem news={news} key={news.title}/>
                )))) : null}
            </div>
        </>
    );
};

export default AllNews;
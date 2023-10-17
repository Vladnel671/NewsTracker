import React from 'react';
import styles from "../../../App.module.css";
import {Button} from "@material-ui/core";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {INewsData, RootState} from "../../../store/store.ts";
import {fetchNewsData} from "../../../utils/NewsUtils.ts";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingTopHeadlines, setTopHeadlines} from "../../../store/actions.ts";

const TopHeadlines: React.FC = () => {

    const COUNTRY = 'us';
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.topHeadlines);
    const isLoading = useSelector((state: RootState) => state.topHeadlines.isLoading)
    const getData = async () => {
        try {
            dispatch(setLoadingTopHeadlines(true));
            const filteredNews = await fetchNewsData(URL);
            dispatch(setTopHeadlines(filteredNews));
            dispatch(setLoadingTopHeadlines(false));
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
            dispatch(setLoadingTopHeadlines(false))
        }
    };

    return (
        <div className={styles.News}>
            {isLoading ? (
                <span className={styles.spinner}></span>
            ) : news.data ? (news.data.length === 0 ? (<>
                <div>
                    <Button color="primary" className={styles.getDataBtn} onClick={getData}>Get news</Button>
                </div>
                <span>No news found</span>
            </>) : (news.data.map((newsItem: INewsData) => (
                <NewsItem news={newsItem} key={newsItem.title}/>
            )))) : null}
        </div>
    );
};

export default TopHeadlines;
import React, {useState} from 'react';
import styles from "../../../App.module.css";
import {Button} from "@material-ui/core";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {INewsData, RootState} from "../../../store/store.ts";
import {fetchNewsData} from "../../../utils/NewsUtils.ts";
import {useDispatch, useSelector} from "react-redux";
import {SetTopHeadlinesAC} from "../../../store/actions.ts";

const TopHeadlines: React.FC = () => {

    const COUNTRY = 'us';
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.topHeadlines);

    const getData = async () => {
        try {
            setIsLoading(true);
            const filteredNews = await fetchNewsData(URL);
            dispatch(SetTopHeadlinesAC(filteredNews));
            setIsLoading(false);
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
        }
    };

    return (
        <div className={styles.News}>
            {isLoading ? (
                <span className={styles.spinner}></span>
            ) : news ? (news.length === 0 ? (<span>No news found</span>) : (news.map((news: INewsData) => (
                <NewsItem news={news} key={news.title}/>
            )))) : null}
            <div>
                <Button color="primary" className={styles.getDataBtn} onClick={getData}>Get news</Button>
            </div>
        </div>
    );
};

export default TopHeadlines;
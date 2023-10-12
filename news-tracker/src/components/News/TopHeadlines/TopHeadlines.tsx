import React, {useState} from 'react';
import styles from "../../../App.module.css";
import {Button} from "@material-ui/core";
import axios from "axios";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {INewsData} from "../../../store/store.ts";

const TopHeadlines: React.FC = () => {

    const [newsData, setNews] = useState<INewsData[]>([]);
    const COUNTRY = 'us';
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

    const getData = async () => {
        try {
            const response = await axios.get(URL);
            const data = response.data;
            const filteredNews = data.articles.filter((news: INewsData) => {
                return !(news.title === '[Removed]' || news.title.trim() === '');
            });
            setNews(filteredNews);
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
        }
    };

    return (
        <div className={styles.News}>
            {newsData.length === 0 ? (<span className={styles.spinner}></span>) : (newsData.map((news) => (
                    <NewsItem news={news} key={news.title}/>
                ))
            )}
            <div>
                <Button color="primary" className={styles.getDataBtn} onClick={getData}>Get news</Button>
            </div>
        </div>
    );
};

export default TopHeadlines;
import React, { useState } from 'react';
import styles from "../App.module.scss";

interface INewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
}

const News: React.FC = () => {
    const [newsData, setNews] = useState<INewsData[]>([]);
    const COUNTRY = 'ru';
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

    const getData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setNews(data.articles);
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
        }
    };

    return (
        <div className={styles.NewsBlock}>
            <div>
                <button className={styles.getDataBtn} onClick={getData}>Получить новости</button>
            </div>
            <div>
                {newsData.length === 0 ? (
                    <div>Загрузка...</div>
                ) : (
                    newsData.map((news) => (
                        <div className={styles.newsContainer} key={news.title}>
                            <div>{news.title}</div>
                            {news.urlToImage ? (
                                <div><img src={news.urlToImage} alt={news.title} /></div>
                            ) : null}
                            <div>{news.description}</div>
                            <div>{news.author}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default News;
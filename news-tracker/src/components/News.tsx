import React, {useState} from 'react';
import styles from "../App.module.scss";

interface INewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
}

const News: React.FC = () => {
    const [newsData, setNews] = useState<INewsData[]>([]);
    const COUNTRY = 'us';
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
        <div className={styles.News}>
            {newsData.length === 0 ? (
                <div>Загрузка...</div>
            ) : (
                newsData.map((news) => (

                    <div className={styles.newsContainer} key={news.title}>
                        <a className={styles.newsLink} href={news.url} target="_blank" rel='noopener noreferrer'>
                            <div>
                                <div className={styles.titleBlock}>{news.title}</div>
                                <div className={styles.publishedAt}>{new Date(news.publishedAt).toLocaleString()}</div>
                            </div>
                            {news.urlToImage ? (
                                <div><img className={styles.newsPicture} src={news.urlToImage} alt={news.title}/>
                                </div>) : null}
                        </a>
                        {news.description ? (
                            <div className={styles.descriptionBlock}>{news.description}</div>) : null}
                        {news.author ? (<div className={styles.AuthorBlock}>Author: {news.author}</div>) : null}
                    </div>

                ))
            )}
            <div>
                <button className={styles.getDataBtn} onClick={getData}>Получить новости</button>
            </div>
        </div>
    );
};

export default News;
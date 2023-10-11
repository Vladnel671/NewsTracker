import React, {ChangeEvent, useState} from 'react';
import styles from "../../App.module.scss";
import {IconButton, TextField} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";
import {LazyImage} from "../LazyImage/LazyImage.tsx";

interface IAllNewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
    source: { name: string }
}

const AllNews: React.FC = () => {

    const [allNewsData, setAllNews] = useState<IAllNewsData[]>([]);
    const [keyword, setKeyword] = useState<string>('')
    const API_KEY = "9104cee86a3240cbb4f97d269814257d";
    const URL = ` https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`;//&pageSize=10

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const getData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            const filteredNews = data.articles.filter((news:IAllNewsData) => {
                return !(news.title === '[Removed]' || news.title.trim() === '');
            });
            setAllNews(filteredNews);
            setKeyword('')
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
                {allNewsData.length === 0 ? (<span className={styles.spinner}></span>) : (allNewsData.map((news) => (
                        <div className={styles.newsContainer} key={news.title}>
                            <a className={styles.newsLink} href={news.url} target="_blank" rel='noopener noreferrer'>
                                <div className={styles.sourceNamePublishedBlock}>
                                    <h4 className={styles.source}>{news.source.name}</h4>
                                    <div className={styles.publishedAt}>
                                        {new Date(news.publishedAt).toLocaleString(undefined, {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'})
                                        }
                                    </div>
                                </div>
                                <span className={styles.titleBlock}>{news.title}</span>
                                {news.urlToImage && !"[Removed]" ? (<div>
                                    <LazyImage key={news.title} src={news.urlToImage} alt={news.title}/>
                                </div>) : null}
                            </a>
                            {news.author ? (<span className={styles.AuthorBlock}>Author: {news.author}</span>) : null}
                            {news.description ? (
                                <span className={styles.descriptionBlock}>{news.description}</span>) : null}
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default AllNews;
import React, {useState} from 'react';
import styles from '../../../styles/main.module.scss';
import {RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";
import Masonry from 'react-masonry-css';
import ReactPaginate from 'react-paginate';

const AllNews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        830: 1
    };

    const NewsItemMemo = React.memo(NewsItem);
    const {data: newsData, isLoading} = useSelector((state: RootState) => state.news);

    if (!newsData.length || isLoading) return <div className={styles.spinnerBlock}>
        <span className={styles.spinner}></span>
    </div>

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;

    const currentPageData = newsData
        .slice(offset, offset + PER_PAGE)
        .map((news) => <NewsItemMemo news={news} key={news.title}/>);

    const pageCount = Math.ceil(newsData.length / PER_PAGE);

    function handlePageClick({selected: selectedPage}: { selected: number }) {
        setCurrentPage(selectedPage);
    }

    return (
        <div className={styles.allNewsBlock}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}
            >
                {currentPageData}
            </Masonry>
            <ReactPaginate
                previousLabel={"← Предыдущая"}
                nextLabel={"Следующая →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                className={styles.pagination}
            />
        </div>
    );
};

export default AllNews;
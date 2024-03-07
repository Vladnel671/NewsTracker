import Alert from '@mui/material/Alert'
import React, { useState } from 'react'
import Masonry from 'react-masonry-css'

import AllNewsItem from '../components/AllNewsItem.tsx'
import Paginator from '../components/ui/Paginator.tsx'
import Loader from '../components/ui/shared/Loader.tsx'
import { breakpointColumnsObj, PER_PAGE } from '../constant'
import { useFetchAllNewsQuery } from '../services/NewsService.ts'
import styles from '../styles/main.module.scss'
import { INewsData } from '../types/types.ts'
import { scrollToTop } from '../utils/NewsUtils.ts'

const AllNews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const NewsItemMemo = React.memo(AllNewsItem)
  const { data: newsData, isLoading, error } = useFetchAllNewsQuery()

  if (isLoading) return <Loader />
  if (!newsData)
    return (
      <Alert variant="filled" severity="info">
        Missing news!
      </Alert>
    )
  if (error) {
    const errorMessage =
      'message' in error ? error.message : JSON.stringify(error)
    return (
      <Alert variant="filled" severity="error">
        {errorMessage}
      </Alert>
    )
  }

  const offset = currentPage * PER_PAGE

  const currentPageData = newsData
    .slice(offset, offset + PER_PAGE)
    .map((news: INewsData) => (
      <NewsItemMemo isLoading={isLoading} news={news} key={news.title} />
    ))

  const pageCount = Math.ceil(newsData.length / PER_PAGE)

  function handlePageChange(_: unknown, value: number) {
    setCurrentPage(value - 1)
    scrollToTop()
  }

  return (
    <section className={styles['all-news-block']}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles['masonry-grid']}
        columnClassName={styles.masonryGridColumn}
      >
        {currentPageData}
      </Masonry>
      {!newsData.length ? (
        <></>
      ) : (
        <Paginator
          count={pageCount}
          page={currentPage + 1}
          onChange={handlePageChange}
        />
      )}
    </section>
  )
}

export default AllNews

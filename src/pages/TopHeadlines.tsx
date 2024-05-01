import Alert from '@mui/material/Alert'
import React, { Suspense } from 'react'

import Loader from '../components/ui/shared/Loader.tsx'
import {
  InCaseYouMissedIt,
  MainNews,
  MultiCategoryNews,
  Spotlight,
} from '../routes/LazyComponents.tsx'
import { useFetchTopHeadlinesQuery } from '../services/NewsService.ts'
import { scrollToTop } from '../utils/NewsUtils.ts'

const TopHeadlines: React.FC = () => {
  scrollToTop()

  const { data: news, isLoading, error } = useFetchTopHeadlinesQuery()

  const firstColumnNews = news?.slice(0, 5) || []
  const secondColumnNews = news?.slice(5, 8) || []
  const thirdColumnNews = news?.slice(8, 12) || []

  const firstColumnMultiCategoryNews = news?.slice(12, 30) || []
  const spotlightNews = firstColumnMultiCategoryNews.slice(2, 5)

  if (isLoading) return <Loader />
  if (error && !news) {
    const errorMessage =
      'message' in error ? error.message : JSON.stringify(error)
    return (
      <Alert variant="filled" severity="error">
        Missing news!:{errorMessage}
      </Alert>
    )
  }

  return (
    <>
      <Suspense fallback="">
        <MainNews
          firstColumnNews={firstColumnNews}
          secondColumnNews={secondColumnNews}
          thirdColumnNews={thirdColumnNews}
        />
      </Suspense>
      <Suspense fallback="">
        <MultiCategoryNews news={firstColumnMultiCategoryNews} />
      </Suspense>
      <Suspense fallback="">
        <InCaseYouMissedIt
          inCaseYouMissedItNews={firstColumnMultiCategoryNews}
        />
      </Suspense>
      <Suspense fallback="">
        <Spotlight spotlightNews={spotlightNews} />
      </Suspense>
    </>
  )
}

export default TopHeadlines

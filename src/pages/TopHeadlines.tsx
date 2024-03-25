import Alert from '@mui/material/Alert'
import { motion } from 'framer-motion'
import React from 'react'

import InCaseYouMissedIt from '../components/InCaseYouMissedIt.tsx'
import MainNews from '../components/MainNews.tsx'
import MultiCategoryNews from '../components/MultiCategoryNews.tsx'
import Spotlight from '../components/Spotlight.tsx'
import MainSkeleton from '../components/ui/MainSkeleton.tsx'
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

  if (isLoading) return <MainSkeleton />
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 3 }}>
      <MainNews
        isLoading={isLoading}
        firstColumnNews={firstColumnNews}
        secondColumnNews={secondColumnNews}
        thirdColumnNews={thirdColumnNews}
      />
      <MultiCategoryNews news={firstColumnMultiCategoryNews} />
      <InCaseYouMissedIt inCaseYouMissedItNews={firstColumnMultiCategoryNews} />
      <Spotlight spotlightNews={spotlightNews} />
    </motion.div>
  )
}

export default TopHeadlines

import { lazy } from 'react'

export const NotFound = lazy(() => import('../pages/NotFound.tsx'))
export const AllNews = lazy(() => import('../pages/AllNews.tsx'))
export const TopHeadlines = lazy(() => import('../pages/TopHeadlines.tsx'))

export const MainNews = lazy(() => import('../components/MainNews.tsx'))
export const MultiCategoryNews = lazy(
  () => import('../components/MultiCategoryNews.tsx')
)
export const InCaseYouMissedIt = lazy(
  () => import('../components/InCaseYouMissedIt.tsx')
)
export const Spotlight = lazy(() => import('../components/Spotlight.tsx'))

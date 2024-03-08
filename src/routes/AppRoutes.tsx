import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from '../components/ui/shared/Loader.tsx'

const NotFound = lazy(() => import('../components/NotFound.tsx'))
const AllNews = lazy(() => import('../pages/AllNews.tsx'))
const TopHeadlines = lazy(() => import('../pages/TopHeadlines.tsx'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<TopHeadlines />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

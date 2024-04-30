import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AllNews, NotFound, TopHeadlines } from './LazyComponents.tsx'
import Loader from '../components/ui/shared/Loader.tsx'
import Layout from '../layout/Layout.tsx'

export const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TopHeadlines />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
)

import { Route, Routes } from 'react-router-dom'
import AllNews from '../pages/AllNews.tsx'
import NotFound from '../pages/NotFound.tsx'
import TopHeadlines from '../pages/TopHeadlines.tsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<TopHeadlines />} />
      <Route path='/allnews' element={<AllNews />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

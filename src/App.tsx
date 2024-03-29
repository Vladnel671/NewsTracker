import { motion } from 'framer-motion'
import { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './layout/Footer.tsx'
import Header from './layout/Header.tsx'
import { AppRoutes } from './routes/AppRoutes.tsx'
import styles from './styles/main.module.scss'

const App = () => (
  <div>
    <Header />
    <SkeletonTheme baseColor="#a19c9c" highlightColor="#313131">
      <motion.div
        style={{ minHeight: '100vh' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
      >
        <main className={styles['main-block']}>
          <AppRoutes />
        </main>
      </motion.div>
    </SkeletonTheme>
    <Footer />
  </div>
)

export default App

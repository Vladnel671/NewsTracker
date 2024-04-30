import { motion } from 'framer-motion'

import { AppRoutes } from './routes/AppRoutes.tsx'

const App = () => (
  <motion.div
    style={{ minHeight: '100vh' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 3 }}
  >
    <AppRoutes />
  </motion.div>
)

export default App

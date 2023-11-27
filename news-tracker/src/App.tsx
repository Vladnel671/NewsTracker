import styles from './styles/main.module.scss'
import Header from "./components/layouts/Header.tsx";
import Footer from "./components/layouts/Footer.tsx";
import {AppRoutes} from "./routes/AppRoutes.tsx";
import {motion} from "framer-motion"
import {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {

    return (
        <div className={styles.mainBlock}>
            <SkeletonTheme baseColor="#313131" highlightColor="#525252">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 3}}>
                    <Header/>
                    <AppRoutes/>
                    <Footer/>
                </motion.div>
            </SkeletonTheme>
        </div>
    )
}

export default App

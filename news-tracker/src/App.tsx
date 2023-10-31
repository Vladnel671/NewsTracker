import styles from './styles/main.module.scss'
import Header from "./components/layouts/Header.tsx";
import Footer from "./components/layouts/Footer.tsx";
import {AppRoutes} from "./routes/AppRoutes.tsx";
import {motion} from "framer-motion"

function App() {

    return (
        <div className={styles.mainBlock}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 3}}>
                <Header/>
                <AppRoutes/>
                <Footer/>
            </motion.div>
        </div>
    )
}

export default App

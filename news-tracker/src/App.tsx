import styles from './App.module.css'
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {AppRoutes} from "./AppRoutes.tsx";
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

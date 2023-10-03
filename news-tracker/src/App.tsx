import styles from './App.module.scss'
import News from "./components/News.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className={styles.mainBlock}>
            <Header/>
            <News/>
            <Footer/>
        </div>
    )
}

export default App

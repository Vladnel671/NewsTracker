import styles from './App.module.scss'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AllNews from "./components/AllNews.tsx";

function App() {
    return (
        <div className={styles.mainBlock}>
            <Header/>
            <AllNews/>
            <Footer/>
        </div>
    )
}

export default App

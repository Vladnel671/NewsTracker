import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/main.module.scss'
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)

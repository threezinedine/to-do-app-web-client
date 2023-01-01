import React from 'react'
import dotenv from 'dotenv'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


dotenv.config()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // It must be here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* This is the ONE AND ONLY Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
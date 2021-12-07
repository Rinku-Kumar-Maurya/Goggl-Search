import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import { ResultContextProvider } from './Contexts/ResultContextProvider'

import App from './App'
import './global.css'

ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>,
    document.getElementById('root')
);
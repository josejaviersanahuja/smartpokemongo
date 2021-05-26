import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import {LanguageContextProvider} from './context/LanguageContext'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    
    
    <Router>
    <LanguageContextProvider>
    <App />
    </LanguageContextProvider>
    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


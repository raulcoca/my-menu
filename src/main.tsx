import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index.ts';
import { BrowserRouter } from 'react-router-dom';


const store = configureStore({ reducer: rootReducer });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
)

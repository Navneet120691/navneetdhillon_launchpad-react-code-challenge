import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const store = configureStore(
  {
    reducer: {},
  }
)
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App/>
//     </Provider>
//   </React.StrictMode>
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function

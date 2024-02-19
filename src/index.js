import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';

import App from './App';
import './css/index.css';
import './css/normalize.css';


//redux--
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)
//--redux

const container = document.getElementById('root');
const root = createRoot(container)

root.render(app)

reportWebVitals();

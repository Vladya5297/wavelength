import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import 'rc-slider/assets/index.css';

import {App} from './App';
import {store} from './store';
import './styles/index.css';

const container = document.getElementById('root');

if (!container) {
    throw new Error('root element doesn\'t exists');
}

const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

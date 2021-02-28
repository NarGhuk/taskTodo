import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './state-menagment/store';
import Provider from 'react-redux/es/components/Provider';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    </Provider>, document.getElementById('root')
);

reportWebVitals();

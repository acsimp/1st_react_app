import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; //lightweight css

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

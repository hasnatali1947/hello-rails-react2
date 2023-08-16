import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './components/App';

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
ReactDOM.render(<Index />, document.getElementById('root'));
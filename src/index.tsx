// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';
import 'style/core/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';
// Import Framework7-React Plugin
import Framework7React from 'framework7-react';
import { Provider } from 'react-redux';
import configureStore from './modules';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { getUserInfo } from 'modules/actions/account';
import { parseQuery, addIntlLocalData } from './utils';

// Init F7 Vue Plugin
Framework7.use(Framework7React);
addIntlLocalData();
const store = configureStore();

store.dispatch(getUserInfo(parseQuery())).then((result: any) => {
  const render = () => {
    const Root = () => (
      <Provider store={store}>
        <App />
      </Provider>
    );
    ReactDOM.render(<Root />, document.getElementById('root'));
  };
  if (result.res_code === 1) {
    render();
  }

});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

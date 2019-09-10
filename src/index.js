import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store';
import rootReducer from './ducks';
import './index.css';
import Root from './pages/Root';
import './i18n';

const initialState = {
  ui: {
    themeIsDark: localStorage.getItem('dark') === 'true' || false,
    currentPage: 'walletConnection',
    currentTab: 'home',
    dashboardIsLoading: false,
  },
  wallet: {
    unlocked: false,
  },
  transactions: {
    currentTransactions: [],
    dataFetchers: {},
    successQueue: [],
  },
};

ReactDOM.render(
  <StoreProvider reducers={rootReducer} initialState={initialState}>
    <Root />
  </StoreProvider>,
  document.getElementById('root')
);

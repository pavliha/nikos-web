import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { theme } from './config';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createMuiTheme(theme)}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

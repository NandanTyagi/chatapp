import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MessageProvider } from './contexts/MessageContext';
import { ConnectionProvider } from './contexts/ConnectionContext';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider>
      <UserProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </UserProvider>
    </ConnectionProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

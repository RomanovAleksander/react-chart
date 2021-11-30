import React from 'react';
import ReactDOM from 'react-dom';
import ChartProvider from './context/ChartContext';
import SocketProvider from './context/SocketContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <ChartProvider>
    <SocketProvider>
      <App />
    </SocketProvider>
  </ChartProvider>, document.getElementById('root'));

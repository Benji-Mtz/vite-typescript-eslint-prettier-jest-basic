import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './componentes/FirstApp';
// import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp  title={'Titulo'} />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MyRoutes from './routes.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyRoutes>
      <App />
    </MyRoutes>
  </React.StrictMode>
);

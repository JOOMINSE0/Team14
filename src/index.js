import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Routes from "./Routes"; //-> Routes 컴포넌트 연결

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(<Routes />, document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

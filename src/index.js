import React from 'react';
import ReactDOM from 'react-dom';
// CanvasDraw is a library of react-canvas-draw 
import CanvasDraw from "react-canvas-draw";
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import '../src/components/App/App.css';

ReactDOM.render(
  <React.StrictMode>
      <App />
    {/* Added CanvasDraw */}
    <CanvasDraw/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

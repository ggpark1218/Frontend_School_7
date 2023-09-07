import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListRender from './ListRender';
import ReactFregment from './ReactFragment';
import ReactFregment2 from './ReactFragment2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ListRender /> */}
    {/* <ReactFregment /> */}
    <ReactFregment2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

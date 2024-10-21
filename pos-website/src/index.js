// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';

// import { BrowserRouter } from 'react-router-dom';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//     </BrowserRouter>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrapping the App component in HashRouter */}
      <App />
    </Router>
  </React.StrictMode>
);

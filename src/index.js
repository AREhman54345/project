import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Games from './pages/Games'
import Scategory from './pages/Scategory'
import Ap from './pages/Ap'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Download from './pages/Download';
import Sresult from './components/Sresult';
import Ndownload from './components/Ndownload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Games' element={<Games/>}/>
      <Route path='/Ap' element={<Ap/>}/>
      <Route path='/Download' element={<Download/>}/>
      <Route path='/Sresult' element={<Sresult/>}/>
      <Route path='/Ndownload' element={<Ndownload/>}/>
      <Route path='/Scategory' element={<Scategory/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

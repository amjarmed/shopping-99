import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Todos from './pages/Todos';
import Timer from './Components/Timer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <hr />
    <br />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='todos' element={<Todos />} />
          <Route path='timer' element={<Timer />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <hr />
    <br />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <hr />
  </>,
);

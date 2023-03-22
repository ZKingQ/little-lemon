import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Navbar'
import TopCarousel from './components/TopCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import SecCarousel from './components/SecCarousel';
import Novel from './components/Novel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <TopCarousel/>
      <Home/>
      <SecCarousel/>
      <Novel/>
      <Footer/>
    </div>
  );
}

export default App;

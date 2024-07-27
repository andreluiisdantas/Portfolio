// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='home'><Home /></div>
      <div id='about'><About /></div>
      <div id='portfolio'> <Portfolio /></div>
      <div id='contact'> <Contact /></div>
      <Footer />
    </div>
  );
}

export default App;

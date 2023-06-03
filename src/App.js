import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Contect from './components/Contect';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main'
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>
    </div>
  );
}

export default App;

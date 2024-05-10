import { useState } from 'react';
import Header from './Components/Header';
import './App.css'
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';

function App() {
 

  return (
    <div className=''>
     <Header/>
     <Slider/>
     <ProductionHouse/>
    </div>
  )
}

export default App

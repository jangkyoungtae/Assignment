import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import First from './pages/First';
import Second from './pages/Second';
import SectionBetter from './SectionBetter';

const App = () => {
  const nav = useNavigate();
  const goFirst=()=>{
    nav('/');
  }
  const goSecond=()=>{
    nav('/second');
  }
  return <div>
    <GlobalStyle/>
    <button type='button' onClick={goFirst}>과제1</button>
    <button type='button' onClick={goSecond}>과제2</button>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/second' element={<Second/>}/>
    </Routes>
    
    
  </div>
}


export default App;
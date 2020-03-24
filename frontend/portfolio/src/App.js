import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Info from './Components/Info';

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <Info />
    </div>
  )
}

export default App;

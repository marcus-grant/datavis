import React /* , { Component } */ from 'react';
import { XYFrame } from 'semiotic';
// import Workspace from './workspace';
import './App.css';
// import logo from './logo.svg';

const xyFrame = (
  <XYFrame
    points={[{ price: 1.25, size: 15 }, { price: 2.25, size: 12 }, { price: 1.5, size: 14 }]}
    pointStyle={{ fill: 'blue' }}
    xAccessor="price"
    yAccessor="size"
  />
);
const App = () => (
  <div className="App">
    <xyFrame />
    {/*
    <Workspace />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    */}
  </div>
);
export default App;

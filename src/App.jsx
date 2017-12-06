import React /* , { Component } */ from 'react';
// import { XYFrame } from 'semiotic';
import { ORFrame } from 'semiotic';
// import Workspace from './workspace';
// import './App.css';
// import logo from './logo.svg';

// const xyFrame = (
//   <XYFrame
//     points={[{ price: 1.25, size: 15 }, { price: 2.25, size: 12 }, { price: 1.5, size: 14 }]}
//     pointStyle={{ fill: 'blue' }}
//     xAccessor="price"
//     yAccessor="size"
//   />
// );
// const axis = {
//   orient: 'left',
//   tickFormat: d => d,
//   label: {
//     name: 'axis label',
//     position: { anchor: 'middle' },
//     locationDistance: 40,
//   },
// };

// const data = [
//   {
//     x: 48.06512095595529,
//     value: 49.81135144345719,
//     color: '#4d430c',
//     value2: 1,
//     renderKey: 0,
//     _orFR: 3.9259866446429896,
//     _orFV: 49.81135144345719,
//     _orFX: 65,
//     _orFRZ: -3.9259866446429896,
//     _orFRBase: 560,
//     _orFRBottom: 560,
//     _orFRMiddle: 561.9629933223215,
//     negative: false,
//   }, {
//     x: 36.20873770350591, value: 31.74285631741024, color: '#b3331d', value2: 2, renderKey: 1, _orFR: 2.5018801207679644, _orFV: 31.74285631741024, _orFX: 212.5, _orFRZ: -2.5018801207679644, _orFRBase: 560, _orFRBottom: 560, _orFRMiddle: 561.250940060384, negative: false,
//   }, {
//     x: 28.54748484158185, value: 57.09892229774912, color: '#b6a756', value2: 3, renderKey: 2, _orFR: 4.500371900548316, _orFV: 57.09892229774912, _orFX: 360, _orFRZ: -4.500371900548316, _orFRBase: 560, _orFRBottom: 560, _orFRMiddle: 562.2501859502742, negative: false,
//   },
// ];
const data = [
  { name: 'Bob', score: 9 },
  { name: 'Tom', score: 4 },
  { name: 'Becca', score: 5 },
  { name: 'Kate', score: 8 },
  { name: 'Mike', score: 2 },
  { name: 'Sarah', score: 7 },
];

//
// const orderedColorLabels = ['red', 'pink', 'purple', 'blue-grey', 'blue',
//   'light blue', 'cyan', 'green', 'light green', 'lime', 'yellow', 'amber',
//   'orange', 'deep orange', 'brown', 'deep purple'];

const margin = {
  left: 55,
  top: 25,
  bottom: 50,
  right: 0,
};

const App = () => (
  <div className="App">
    <ORFrame
      size={[300, 300]}
      margin={margin}
      data={data}
      oAccessor="name"
      rAccessor="score"
      style={{ fill: '#00a2ce', stroke: 'white' }}
      type="bar"
      projection="vertical"
      oLabel
      oPadding={32}
    />
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

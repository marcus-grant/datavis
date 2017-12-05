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
const axis = {
  orient: 'left',
  tickFormat: d => d,
  label: {
    name: 'axis label',
    position: { anchor: 'middle' },
    locationDistance: 40,
  },
};

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
  { name: 'Bob', value: 9 },
  { name: 'Tom', value: 4 },
  { name: 'Becca', value: 5 },
  { name: 'Kate', value: 8 },
  { name: 'Mike', value: 2 },
  { name: 'Sarah', value: 7 },
];

const materialColors = {
  'black': ['#000000'],
  'white': ['#ffffff'],
  'grey': [
    '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd',
    '#9e9e9e', '#757575', '#616161', '#424242', '#212121',
  ],
  'red': [
    '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350',
    '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c',
  ],
  'pink': [
    '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a',
    '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f',
  ],
  'purple': [
    '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc',
    '#9c37b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c',
  ],
  'deep purple': [
    '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2',
    '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92',
  ],
  'blue': [
    '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5',
    '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1',
  ],
  'light blue': [
    '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6',
    '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b',
  ],
  'cyan': [
    '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da',
    '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064',
  ],
  'green': [
    '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a',
    '#4caf50', '#54a047', '#388e44c', '#2e7d32', '#1b5e20',
  ],
  'light green': [
    '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65',
    '#8bc45a', '#7cb342', '#689f38', '#555b2f', '#33691e'
  ],
  'lime': [
    '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157',
    '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717',
  ],
  'yellow': [
    '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58',
    '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17',
  ],
  'amber': [
    '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28',
    '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00',
  ],
  'orange': [
    '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726',
    '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100',
  ],
  'deep orange': [
    '#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65',
    '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315',
  ],
  'brown': [
    '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63',
    '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723',
  ],
  'blue grey': [
    '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c',
    '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238',
  ],
};

const orderedColorLabels = [ 'red', 'pink', 'purple', 'blue-grey', 'blue',
  'light blue', 'cyan', 'green', 'light green', 'lime', 'yellow', 'amber',
  'orange', 'deep orange', 'brown',  'deep purple']

const margin = {
  left: 55,
  top: 25,
  bottom: 50,
  right: 0,
};

const App = () => (
  <div className="App">
    <h1>Here be Monsters</h1>
    <ORFrame
      size={[300, 300]}
            data={data}
            oAccessor={"user"}
            dynamicColumnWidth={"value"}
            style={{ fill: "#00a2ce", stroke: "white" }}
            type={"bar"}
            projection={"radial"}
            oLabel={true}
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

import React /* , { Component } */ from 'react';
import ChartWorkspace from './chart-workspace';
// import Dropzone from 'react-dropzone';
// import { CSVToObjectArray, testCSVString } from './csv-manager';
// import testCSVfile from './steel-data-test.csv';

const App = () => (
  <ChartWorkspace />
);
export default App;

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
//   { name: 'Bob', score: 9 },
//   { name: 'Tom', score: 4 },
//   { name: 'Becca', score: 5 },
//   { name: 'Kate', score: 8 },
//   { name: 'Mike', score: 2 },
//   { name: 'Sarah', score: 7 },
// ];

//
// const orderedColorLabels = ['red', 'pink', 'purple', 'blue-grey', 'blue',
//   'light blue', 'cyan', 'green', 'light green', 'lime', 'yellow', 'amber',
//   'orange', 'deep orange', 'brown', 'deep purple'];

// const margin = {
//   left: 55,
//   top: 25,
//   bottom: 50,
//   right: 0,
// };

// class Basic extends React.Component {
//   constructor() {
//     super();
//     this.state = { files: [] };
//   }
//
//   onDrop(files) {
//     console.log('dropped files\n', files);
//     files.forEach((file) => {
//       // TODO deal with this irritating f'in linter error about globals
//       const reader = new FileReader();
//       reader.onload = () => {
//         // a variable should be altered in a parent component so sending a
//         // func here would be the appropriate to fetch new files
//         const fileString = reader.result;
//         console.log('filestring\n', fileString);
//         this.props.handleNewFile(fileString);
//       };
//       reader.onabort = () => console.log('file reading was aborted');
//       reader.onerror = () => console.log('file reading failed');
//       reader.readAsText(file);
//     });
//     this.setState({
//       files,
//     });
//   }
//
//   render() {
//     return (
//       <section>
//         <div className="dropzone">
//           <Dropzone onDrop={this.onDrop.bind(this)}>
//             <p>Try dropping some files here, or click to select files to upload.</p>
//           </Dropzone>
//         </div>
//         <aside>
//           <h2>Dropped files</h2>
//           <ul>
//             {
//               this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
//             }
//           </ul>
//         </aside>
//       </section>
//     );
//   }
// }
// Inside render return...    // <Basic onRead={handleNewFile} />

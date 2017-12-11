import React from 'react';
import Dropzone from 'react-dropzone';
// import { ReactSelectize, SimpleSelect } from 'react-selectize';
// import Select from 'react-select';
// import PropTypes from 'prop-types';
// import { CSVFileToObjectArray } from './csv-parser';

// Definitions
// __panel : is the main container className for holding a whole set of controls
// __container : a container that holds a sub-group of related controls

const singleControl = (title, actionTitle, callback) => (
  <div className="chart-controls__container">
    <h6>{title}</h6>
    <button
      className="chart-controls__button"
      onClick={callback}
    >{actionTitle}
    </button>
  </div>
);


const plusMinusControls = (title, plusCallback, minusCallback) => (
  <div className="chart-controls__container">
    <h6>{title}</h6>
    <button
      className="chart-controls__button"
      onClick={minusCallback}
    >
      -
    </button>
    <button
      className="chart-controls__button"
      onClick={plusCallback}
    >
      +
    </button>
  </div>
);

const convertKeysToOptions = (keys) => {
  const options = [];
  keys.forEach((currentKey) => {
    if (currentKey.charAt(0) === '_') {} else if (currentKey === 'renderKey') {} else if (currentKey === 'negative') {} else {
      options.push({ value: currentKey, label: currentKey });
    }
  });
  return options;
};

// TODO: Add plusMinusNumberBox component function
// TODO: Add dropdown selectors controls function
// const selectionMenuControls = (title, options, selected, eventHandler) => {
//   console.log('title: ', title, 'opts: ', options, 'selected: ', selected);
//   const initialOptions = { value: 'Select Data First!', label: 'Select Data First!' };
//   const validatedOptions = convertKeysToOptions(options) || initialOptions;
//   return (
//     <div className="chart-controls__container">
//       <h3>{title}</h3>
//       <Select
//         name={title}
//         options={validatedOptions}
//         value={selected}
//         onChange={eventHandler(selected)}
//       />
//     </div>
//   );
// };
// const selectionMenuControls = (title, options, selected, eventHandler) => {
//   const validatedOptions = convertKeysToOptions(options);
//   return (
//     <SimpleSelect placeholder={title} onValueChange={eventHandler}>
//       { validatedOptions.forEach(option => (
//         <option value={option.value}>{option.label}</option>
//       ))}
//     </SimpleSelect>
//   );
// };

// const radiusControls = (plusCallback, minusCallback) =>
//   plusMinusControls('Radius', plusCallback, minusCallback);
//
//
// const randomizeControls = callback =>
//   singleControl('Data', 'Randomize', callback);

const dropzonePromptString = 'To import datafile drop it here, '
  + 'or click here to select files to '
  + 'upload from your computer.';

// TODO: Display filename
// TODO: Make csv-parser handle the file read callback
// TODO: Restrict files to csv
// TODO: Restric to single file if possible, otherwise just chose first
const fileDropzone = eventHandler => (
  <div className="chart-controlls__dropzone">
    <Dropzone onDrop={eventHandler}>
      <p>{dropzonePromptString}</p>
    </Dropzone>
  </div>
);

/*
 * Chart Control Template Functions
 */

const pieChartControls = props => (
  <div className="chart-controls">
    {/* { selectionMenuControls(
      'oAccessor',
      props.dataKeys,
      props.oAccessor,
      props.oAccessorSelectionHandler,
    )}
    { selectionMenuControls(
      'rAccessor',
      props.dataKeys,
      props.rAccessor,
      props.rAccessorSelectionHandler,
    )} */}
    { fileDropzone(props.onFileDrop) }
  </div>
);

const barChartControls = props => (
  <h2>Bar Chart Placeholder</h2>
);

/*
 * ChartControl Template Pattern Matching
 */
// export const ChartTypes = {
//   Bar: { id: 0, template: pieChartControls },
//   Pie: { id: 1, template: barChartControls },
// };

const chartControlsByType = (props) => {
  const chartType = props.chartType;
  if (chartType === 'bar') {
    return barChartControls(props);
  } else if (chartType === 'pie') {
    return pieChartControls(props);
  }
  return (<h2>This Charting Template Doesnt Exist!</h2>);
};

export const ChartControls = props => chartControlsByType(props);
// --- Old ChartControls ----
// <div className="chart-controls__panel">
//   { singleControl('Click Me', props.label, props.incrementLabelCallback) }
//   { fileDropzone(props.onFileDrop) }
// </div>

// export default class ChartControls extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className="chart-controls">
//         { randomizeControls(this.props.randomizeDataCallback) }
//         { radiusControls(
//           this.props.incrementRadiusCallback,
//           this.props.decrementRadiusCallback,
//         )}
//       </div>
//     );
//   }
// }

// ChartControls.propTypes = {
//   chartType: PropTypes.string.isRequired,
//   onFileDrop: PropTypes.func.isRequired,
//   oAccessor: PropTypes.string.isRequired,
//   rAccessor: PropTypes.string.isRequired,
//   oAccessorSelectionHandler: PropTypes.func.isRequired,
//   rAccessorSelectionHandler: PropTypes.func.isRequired,
//   oLabelToggleHandler: PropTypes.bool.isRequired,
// };

import React from 'react';
// import PropTypes from 'prop-types';
// import { randomData, RandomDataType } from '../api/random-data';
import Chart from './chart';
import ChartControls from './chart-controls';

// This class concerns itself with managing the state and styles of a chart and its controls
export default class ChartWorkspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="chart-workspace">
        <Chart />
        <ChartControls />
      </div>
    );
  }
}

import React from 'react';
import { ORFrame } from 'semiotic';
// import PropTypes from 'prop-types';
// import { Chart, ChartType } from './chart';
// import { randomData, RandomDataType } from '../api/random-data';


// This class concerns itself with managing the state and styles of a chart and its controls
export default class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // chartType: ChartType.SEM_BAR_GRAPH,
      styles: {
        chartWidth: 560,
        chartHeight: 360,
        chartPadding: 30,
        dataRadius: 3,
        dataStroke: 2,
      },
      numDataPoints: 10,
      // data: randomData(10, RandomDataType.LINSPACE),
    };
  }

  // from Chart component
  // <Chart
  //   type={this.state.chartType}
  //   data={this.state.data}
  //   styles={this.state.styles}
  // />
  render() {
    console.log('[Workspace.render()]: this.state = ', this.state);
    return (
      <div className="workspace">
        <ORFrame
          data={[{ department: 'art', students: 50 }, { department: 'science', students: 8 }]}
          style={{ fill: 'blue' }}
          rAccessor="students"
          oAccessor="department"
        />
        <h3>Controls</h3>
      </div>
    );
  }
}

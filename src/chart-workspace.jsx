import React from 'react';
// import PropTypes from 'prop-types';
// import { randomData, RandomDataType } from '../api/random-data';
import { PieChart } from './chart';
import { ChartControls } from './chart-controls';
import { getKeys, CSVFileToObjectArray } from './csv-parser';

// This class concerns itself with managing the state and styles of a chart and its controls

/*
 * Class Helper Methods
 */

// TODO: Is this the best place to handle files?
export default class ChartWorkspace extends React.Component {
  constructor(props) {
    super(props);
    this.onFileRead = this.onFileRead.bind(this);
    this.onFileDrop = this.onFileDrop.bind(this);
    this.changeOAccessor = this.changeOAccessor.bind(this);
    this.changeRAccessor = this.changeRAccessor.bind(this);
    this.toggleOLabel = this.toggleOLabel.bind(this);
    this.state = {
      chartType: 'pie',
      chartData: [],
      dataKeys: [],
      oAccessor: '',
      rAccessor: '',
      oLabel: false,
    };
  }


  /*
   * Callback Endpoints
   */
  onFileRead(newData) {
    this.setState({ chartData: newData });
    console.log('state.chartData\n', this.state.chartData);
    this.setState({ dataKeys: getKeys(this.state.chartData) });
    console.log('state.dataKeys\n', this.state.dataKeys);
  }

  onFileDrop(newFile) {
    console.log('onFileDrop.newFile = ', newFile);
    CSVFileToObjectArray(this.onFileRead, newFile);
  }

  changeOAccessor(selectedOption) {
    this.setState({ oAccessor: selectedOption });
    console.log('state.oAccessor\n', selectedOption);
  }
  changeRAccessor(selectedOption) {
    this.setState({ rAccessor: selectedOption });
    console.log('state.rAccessor\n', selectedOption);
  }

  toggleOLabel() { this.setState({ oLabel: !this.state.oLabel }); }


  /*
   * Rendering
   */
  render() {
    return (
      <div className="chart-workspace">
        <PieChart
          chartData={this.state.chartData}
          oAccessor={this.state.oAccessor}
          rAccessor={this.state.rAccessor}
          oLabel={this.state.oLabel}
        />
        <ChartControls
          chartType={this.state.chartType}
          onFileDrop={this.onFileDrop}
          dataKeys={this.state.dataKeys}
          oAccessor={this.state.oAccessor}
          rAccessor={this.state.rAccessor}
          oAccessorSelectionHandler={this.changeOAccessor}
          rAccessorSelectionHandler={this.changeRAccessor}
          oLabelToggleHandler={this.toggleOLabel}
        />
      </div>
    );
  }
}

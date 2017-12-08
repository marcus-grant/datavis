import React from 'react';
import { ORFrame } from 'semiotic';
import { testCSVString, CSVToObjectArray } from './csv-parser';
// import PropTypes from 'prop-types';

// export const ChartType = {
//   PIE_CHART: 0,
//   BAR_CHART: 1,
// };

// const DataType = {
//   NUMERICAL: 0,
//   CATEGORICAL: 1,
//   RELATIONAL: 2,
// };
//

const testData = [
  { name: 'Rick', score: 200 },
  { name: 'Morty', score: 20 },
  { name: 'Morty', score: 18 },
  { name: 'Summer', score: 22 },
  { name: 'Beth', score: 51 },
  { name: 'Jerry', score: 5 },
];

// TODO: Needs better name, and potentially should be replaced by more integrated solution
// In the case of some charts like Pie/Donut...
// If the same ordinal key is charted with data with duplicate values for that key are charted,
// they get projected outwards as another arc ontop of the normal pie slice
// To fix this, each ordinal entry needs to be summed together
const reduceDataBySummingSameOrdinalEntries = (data, oKey, rKey) => {
  console.log('normal data\n', data);
  const reducedData = [];
  const setOfOrdinals = new Set();
  data.forEach((currentDataEntry) => {
    const currentOrdinalValue = currentDataEntry[oKey];
    const currentRangeValue = currentDataEntry[rKey];
    if (setOfOrdinals.has(currentOrdinalValue)) {
      reducedData[rKey] += currentRangeValue;
    } else {
      reducedData.push(currentDataEntry);
      setOfOrdinals.add(currentOrdinalValue);
    }
    console.log('current ordinal: ', currentOrdinalValue, ', range: ', currentRangeValue);
    console.log('current ordinal set: ', setOfOrdinals);
  });
  console.log('reducedData\n', reducedData);
  return reducedData;
};

const testCSV = () => CSVToObjectArray(testCSVString);

const testPropsPie = {
  size: [800, 480],
  oAccessor: 'name',
  dynamicColumnWidth: 'score',
  type: 'bar',
  projection: 'radial',
  style: { fill: '#00a2ce', stroke: 'white' },
  oLabel: true,
  // data: testData,
  // data: reduceDataBySummingSameOrdinalEntries(testData, 'name', 'score'),
  data: reduceDataBySummingSameOrdinalEntries(testCSV),
};

// TODO: Create a data classifier that can test if a column of data can be represented as a number
// This will make it easier to setup controls that have the user select data and chart types
// TODO: Props should be better organized and categorized
// TODO: Change to props input from workspace after testing
export const Chart = () => <ORFrame {...testPropsPie} />;

export default Chart;

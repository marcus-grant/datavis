// TODO: Should this be a class instead, where it's instantiated by the file?
// TODO: Make this work more generically and check for key mismatches
// TODO: Add sorting function as argument
// TODO: Add validation of some kind against the keys of all array'd objects
// TODO: Should it be assumed the first object of the array has all the keys?
export const getKeys = objectArray => Object.keys(objectArray[0]);
// TODO: Put in checks that the number of values/row == # of keys for every row
// check for undefines in keys and all values
// Also remove the test string
// const CSVToObjectArray = (csvString, fieldDelimiter, rowDelimiter) => {
export const CSVStringToObjectArray = (csvString) => {
  // start by getting the field keys / column names / accessor names
  let charIdx = 0;
  const keys = [];
  let currentKey = '';
  const getChar = i => (csvString.charAt(i));
  let currentChar = getChar(charIdx);
  while (currentChar !== '\n') {
    if (currentChar === ',') {
      keys.push(currentKey);
      currentKey = '';
    } else { currentKey += csvString.charAt(charIdx); }
    charIdx += 1;
    currentChar = getChar(charIdx);
  } keys.push(currentKey);

  // Keys seem to work, create unit tests
  // console.log('keys\n', keys);

  // the first newline has already been parsed, skip to next char
  charIdx += 1;
  // will now scan till end of string
  const len = csvString.length;
  // assign currentValue to accumulate parsed chars till delimiters detected
  let currentValue = '';
  let currentRow = {}; // stores parsed values with correct key names
  let currentKeyIdx = 0; // tracks key index for getting current key-name
  const data = []; // the array to store all rows of values

  currentKey = keys[currentKeyIdx]; // start loop at first key index
  currentChar = getChar(charIdx); // start loop with first character
  while (charIdx < len) {
    // if a value delimiter is encountered...
    // store the currentValue's accumulated characters into the row
    // then increment the key index and set reference current key to new key
    if (currentChar === ',') {
      currentRow[currentKey] = currentValue; // store the accumulated string
      currentValue = ''; // reset currentValue string accumulator
      currentKeyIdx += 1; // increment the key index so the next key is used
      currentKey = keys[currentKeyIdx]; // get the next key from the key array
    } else if (currentChar === '\n') {
      currentRow[currentKey] = currentValue; // store last value to row
      currentValue = '';
      data.push(currentRow); // add currentRow to the data array
      currentRow = {}; // reset the row reference to accept new row
      currentKeyIdx = 0; // reset the key index before next row
      currentKey = keys[currentKeyIdx]; // set currentkey to first key
    } else {
      // in most cases, just add characters to currentValue till delimiter
      currentValue += getChar(charIdx);
    }
    // for each character the character index needs to be incremented
    // then currentChar needs to be fetched to be processed
    charIdx += 1;
    currentChar = getChar(charIdx);
  } // end of value parsing while-loop
  // currentRow[currentKey] = currentValue;
  // data.push(currentRow);
  // console.log('data\n', data);
  return data;
};

// TODO: figure out a proper way to have the 'onread' callback go back to workspace
// It would be nice if all of the code for managing csvs or files are in their file
export const CSVFileToObjectArray = (onFileReadCallback, csvFile) => {
  if (csvFile !== null || csvFile !== undefined) {
    const reader = new window.FileReader();
    console.log('CSVFileToObjectArray.csvFile\n', csvFile);
    reader.onload = () => {
      onFileReadCallback(CSVStringToObjectArray(reader.result));
    };
    // TODO: add abort and failed reader handlers
    reader.readAsText(csvFile[0]);
  }
};

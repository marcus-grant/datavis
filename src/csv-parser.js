// TODO: Put in checks that the number of values/row == # of keys for every row
// check for undefines in keys and all values
// Also remove the test string
export const testCSVString = 'Part,Commodity,Grade,Suppliers,Prices,Volume\n1,HDG,DX54D,Salzgitter,1180,2090\n2,HDG,DX53D,Arcelor,1189,125\n3,HDG,DX52D,TKS,881,44\n4,HDG,DX54D,TKS,945,1341\n5,HDG,DX53D,Salzgitter,808,2025\n6,HDG,DX52D,Arcelor,1281,31\n7,CR,DC03,TKS,1254,106\n8,HDG,DX52D,TKS,827,48\n9,CR,DC03,Arcelor,1232,94\n10,HDG,DX53D,TKS,1181,1744';
// const CSVToObjectArray = (csvString, fieldDelimiter, rowDelimiter) => {
export const CSVToObjectArray = (csvString) => {
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
  console.log('keys\n', keys);

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
  currentRow[currentKey] = currentValue;
  data.push(currentRow);
  console.log('data\n', data);
  return data;
};

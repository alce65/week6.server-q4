/* eslint-disable arrow-body-style */
import { ObjectEncodingOptions } from 'fs';
import fs from 'fs/promises';

const fileName = 'sample.txt';
const newLine = 'Nuevos datos para almacenar mediante promesas\n';
const codeOptions: ObjectEncodingOptions = {
  encoding: 'utf-8',
};

// Promises
// fs.writeFile(fileName, newLine, codeOptions)
//   .then(() => {
//     return fs.readFile(fileName, codeOptions);
//   })
//   .then((data) => console.log(data));

(async () => {
  // OverWrite await fs.writeFile(fileName, newLine, codeOptions);
  await fs.appendFile(fileName, newLine, codeOptions);
  const data = await fs.readFile(fileName, codeOptions);
  console.log(data);
})();

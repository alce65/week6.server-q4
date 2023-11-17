import fs from 'fs';

const data = fs.readFileSync('sample.txt', { encoding: 'utf-8' });
console.log(data);

fs.readFile('sample.bad.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log(data);
});

console.log('Última linea');

const newLine = 'Nuevos datos para almacenar';

fs.writeFileSync('sample2.txt', newLine);
const data2 = fs.readFileSync('sample2.txt', { encoding: 'utf-8' });
console.log(data2);

fs.writeFile('sample3.txt', newLine, { encoding: 'utf-8' }, () => {
  fs.readFile('sample3.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log('Sample3:', data);
  });
});

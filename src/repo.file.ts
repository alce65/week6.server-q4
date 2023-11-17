import fs from 'fs/promises';

export const readData = (file: string) =>
  fs.readFile(file, { encoding: 'utf-8' });

export const addData = () => {};

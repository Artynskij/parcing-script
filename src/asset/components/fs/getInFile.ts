import * as fs from 'fs';

export const getInFile = (name: string) => {
  // return ''

  const data = fs.readFileSync(`parsingFiles/${name}.txt`);

  const json = JSON.parse(data.toString());
  return json;
};

import * as fs from 'fs';

export const getNamesInFolder = (url: string) => {
  const folder = fs
    .readdirSync('parsingFiles/' + url)
    .map((item) => item.replace('.txt', ''));

  return folder;
};

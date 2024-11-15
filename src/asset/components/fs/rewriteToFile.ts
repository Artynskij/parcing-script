import * as fs from 'fs';

export const rewriteToFile = async (name: string, data: any) => {
  // return ''

  await fs.writeFile(
    `parsingFiles/${name}.txt`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error('Произошла ошибка при добавлении данных в файл:', err);
        return;
      }
      console.log(`Данные перезаписаны в файл ${name}!`);
    },
  );
};

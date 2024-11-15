import * as fs from 'fs';

export const appendToFile = async (name: string, data: any) => {
  // return ''

  await fs.appendFile(
    `parsingFiles/${name}.txt`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error('Произошла ошибка при добавлении данных в файл:', err);
        return;
      }
      console.log(`Данные успешно добавлены в файл ${name}!`);
    },
  );
};

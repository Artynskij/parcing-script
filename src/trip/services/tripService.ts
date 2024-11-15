import jsdom = require('jsdom');
import axios from 'axios';
const { JSDOM } = jsdom;

import { IMessageStatus } from 'src/asset/types/commonTypes';
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';

// export const  = () => {
//   const mess = 'parsingTripadvisor';
//   return mess;
// };

export const parsingTrip = async () => {
  const statusMessage: IMessageStatus = {
    title: `${'Tripadvisor'} all ok`,
    error: null,
  };
  let count = 0;
  const getData = async () => {
    const data = await axios(
      'https://www.tripadvisor.com/Hotels-g294447-Belarus-Hotels.html',
    )
      .then((res) => {
        count++;
        const dom = new JSDOM(res.data);
        const document = dom.window.document;
        // const h1 = document.querySelector('h1');
        const scripts = document.querySelectorAll('script');

        const pageData = [];

        scripts.forEach((script) => {
          if (script.src.includes('data:text/javascript')) {
            const dataScriptContent = script.src.split(',')[1];
            const decodedContent = decodeURIComponent(dataScriptContent);
            const jsonStartIndex =
              decodedContent.indexOf('JSON') + 'JSON.parse('.length;
            const jsonEndIndex = decodedContent.lastIndexOf(')))');
            const jsonString = decodedContent.slice(
              jsonStartIndex,
              jsonEndIndex,
            );

            const jsonBlyad = JSON.parse(JSON.parse(jsonString));
            console.log(`${count} - ${jsonBlyad.route[0].path}`);
            pageData.push(jsonBlyad.urqlSsrData.results);
          }
        });
        // return getData();
        return pageData[0];
      })
      .catch((err) => {
        console.log(`parsing ${count} pages ok`);
        statusMessage.title = `${'Tripadvisor'} something happens (parsing)`;
        statusMessage.error = err;
      });
    return data;
  };

  const returnData = await getData();
  return { data: returnData, message: statusMessage };
};

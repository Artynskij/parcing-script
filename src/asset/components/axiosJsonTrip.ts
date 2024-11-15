import axios from 'axios';
import jsdom = require('jsdom');
import { cookieTripadvisor, userAgentTripadvisor } from '../utils/cookieTrip';
import { IUrlObjectData } from '../types/commonTypes';

const { JSDOM } = jsdom;

export const axiosJsonTrip = async ({
  url,
  cookieNum,
  userAgent = 0,
}: {
  url: string;
  cookieNum: number;
  userAgent?: number;
}) => {
  const getResponse = axios({
    url: url,
    headers: {
      'Accept-Language':
        'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,bm;q=0.6,sq;q=0.5',

      'User-Agent': userAgentTripadvisor[userAgent],
      Cookie: cookieTripadvisor[cookieNum],
    },
  }).then((res) => {
    const dom = new JSDOM(res.data);
    const document = dom.window.document;
    const scripts = document.querySelectorAll('script');
    // const arrayObjectsUrlOfPage: IUrlObjectData[] = [];
    const returnedData = [];
    scripts.forEach((script) => {
      if (script.src.includes('data:text/javascript')) {
        // encoding script start -----------------------------
        const dataScriptContent = script.src.split(',')[1];
        const decodedContent = decodeURIComponent(dataScriptContent);
        const jsonStartIndex =
          decodedContent.indexOf('JSON') + 'JSON.parse('.length;
        const jsonEndIndex = decodedContent.lastIndexOf(')))');
        const jsonString = decodedContent.slice(jsonStartIndex, jsonEndIndex);
        const jsonData = JSON.parse(JSON.parse(jsonString)).urqlSsrData.results;

        returnedData.push(jsonData);

        // encoding script end -----------------------------
        // for (const key in jsonData) {
        //   const stringKey: string = jsonData[key].data;
        //   const regValidate = '{"list":{"isComplete":';
        //   if (stringKey.includes(regValidate)) {
        //     recursive = true;
        //     countPageCards += 30;
        //     const resultArray = JSON.parse(jsonData[key].data).list.results;
        //     resultArray.forEach((item) => {
        //       const url = item.location.url;
        //       const id = item.locationId;
        //       const name = item.location.locationV2.names.name;
        //       const parent = item.location.locationV2.names.parentGeo;
        //       const type = item.location.detail.__typename;
        //       const returnedObj = {
        //         url: url as string,
        //         id: +id as number,
        //         name: name as string,
        //         type: type as string,
        //         parent: parent as string,
        //       };
        //       arrayObjectsUrlOfPage.push(returnedObj);
        //     });
        //   }
        // }
      }
    });
    return returnedData[0];
  });
  return getResponse;
};

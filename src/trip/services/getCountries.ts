import axios from 'axios';
import jsdom = require('jsdom');

import { appendToFile } from 'src/asset/components/fs/appendToFile';
import { IMessageStatus } from 'src/asset/types/commonTypes';
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';
const { JSDOM } = jsdom;

export const getCountries = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  const getData = async () => {
    const data = await axios({
      url: 'https://www.tripadvisor.com/SiteIndex',
      headers: {
        'Accept-Language':
          'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,bm;q=0.6,sq;q=0.5',

        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        Cookie: cookieTripadvisor[1],
      },
    })
      .then((res) => {
        const dom = new JSDOM(res.data);
        const document = dom.window.document;
        const mainBlock = document.querySelector('.world_destinations');
        const anchorsBlock = mainBlock.querySelectorAll('a');
        // "/SiteIndex-g660186-Ross_Island.html
        const pageData = [];

        anchorsBlock.forEach((anchorNode: HTMLAnchorElement) => {
          const idHref = anchorNode.href.split('-')[1];
          const nameHref = anchorNode.href.split('-')[2];
          const id = idHref.slice(1, idHref.length);
          const codename = nameHref.replace('.html', '');
          const pushAnchorData = {
            id: +id,
            hrefName: codename,
            href: anchorNode.href,
            country: anchorNode.innerHTML,
          };
          if (
            pushAnchorData.id > 50 &&
            pushAnchorData.id !== 147237 &&
            pushAnchorData.id !== 291958
          ) {
            pageData.push(pushAnchorData);
          }
        });
        // return getData();

        // console.log(pageData[0]);
        pageData.sort((item1, item2) => item1.id - item2.id);
        Promise.all([appendToFile(JSON.stringify(pageData), 'countries')]);
        return pageData;
      })
      .catch((err) => {
        console.log('err with url func');
        statusMessage.title = `${'Tripadvisor'} something happens (parsing)`;
        statusMessage.error = err;
      });
    return data;
  };

  const returnData = await getData();
  return { data: returnData, message: statusMessage };
};

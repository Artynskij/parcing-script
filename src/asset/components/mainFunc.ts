import { getInFile } from 'src/asset/components/fs/getInFile';

import {
  ICountryTrip,
  IErrorRecursion,
  IMessageStatus,
  ITownTrip,
  IUrlObjectData,
  IUrlsObjects,
  IUrlsObjectsWithTowns,
} from 'src/asset/types/commonTypes';
import {
  cookieTripadvisor,
  userAgentTripadvisor,
} from 'src/asset/utils/cookieTrip';
import { axiosJsonTrip } from 'src/asset/components/axiosJsonTrip';
import { rewriteToFile } from 'src/asset/components/fs/rewriteToFile';

import axios from 'axios';
import jsdom = require('jsdom');
import { delay } from 'src/asset/components/delay';
import { randomMinute } from 'src/asset/components/randomMinute';
const { JSDOM } = jsdom;

export const mainFunc = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  let mustStop = false;
  function randomNum(count: number) {
    return Math.floor(Math.random() * count);
  }
  let randomCookie = cookieTripadvisor.length - 1;
  let requestCount = 0;
  let errorCount = 0;
  const errorObjects: ICountryTrip[] = [];
  const getData = async (country: ICountryTrip) => {
    console.log(` ${country.country} start`);
    const dataUrlsOfTown: ITownTrip[] = [];
    const getCountryObjects = async (
      propCountry: ICountryTrip,
      propsCountPageCards = 0,
    ) => {
      let recursive = false;
      let countPageCards = propsCountPageCards;
      const url = propsCountPageCards
        ? `https://www.tripadvisor.com/Restaurants-g${propCountry.id}-oa${propsCountPageCards}-${propCountry.hrefName}.html#LOCATION_LIST`
        : `https://www.tripadvisor.com/Restaurants-g${propCountry.id}-${propCountry.hrefName}.html`;
      if (requestCount % 10 === 0) {
        await delay(randomMinute(0.05, 0.09));
        // randomAgent = randomNum(userAgentTripadvisor.length);
      }
      const data = await axios({
        url: url,
        headers: {
          'Accept-Language':
            'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,bm;q=0.6,sq;q=0.5',

          'User-Agent': userAgentTripadvisor[userAgentTripadvisor.length - 1],
          Cookie: cookieTripadvisor[randomCookie],
        },
      })
        .then((res: any) => {
          const dom = new JSDOM(res.data);
          const document = dom.window.document;
          requestCount++;
          console.log(`${requestCount} request`);
          const arrayObjectsUrlOfPage: ITownTrip[] = [];
          function firstPage() {
            const townsOfPage: ITownTrip[] = [];
            const mainBlock: HTMLDivElement =
              document.querySelector('#BROAD_GRID');
            if (!mainBlock) {
              console.log(`${country.country} have another tree`);

              errorObjects.push(country);
              return null;
            }
            const blocks = mainBlock.querySelectorAll('.geo_name');

            blocks.forEach((block) => {
              const tagA = block.querySelector('a');
              const hrefName = tagA.href.split('-')[2].replace('.html', '');
              const id = tagA.href.split('-')[1].replace('g', '');

              townsOfPage.push({
                country: country.country,
                href: tagA.href,
                id: +id,
                hrefName: hrefName,
                parent: null,
                town: tagA.innerHTML.replace(' Restaurants', ''),
              });
            });

            return townsOfPage;
          }
          function anotherPage() {
            const townsOfPage: ITownTrip[] = [];
            const mainBlock: HTMLDivElement =
              document.querySelector('#BODYCON');
            if (!mainBlock) {
              console.log('dont have main block');
              return null;
            }

            const blocks = mainBlock
              .querySelector('.geoList')
              .querySelectorAll('li');
            blocks.forEach((block) => {
              const tagA = block.querySelector('a');
              const tagSpan = block.querySelector('span');
              const hrefName = tagA.href.split('-')[2].replace('.html', '');
              const id = tagA.href.split('-')[1].replace('g', '');
              const nameTown = tagA.innerHTML.replace(' Restaurants', '');
              townsOfPage.push({
                country: country.country,
                href: tagA.href,
                id: +id,
                hrefName: hrefName,
                parent: tagSpan.innerHTML,
                town: nameTown,
              });
            });
            return townsOfPage;
          }

          recursive = true;
          const returnedObj = countPageCards ? anotherPage() : firstPage();
          if (!returnedObj) {
            return;
          }
          countPageCards += 20;

          arrayObjectsUrlOfPage.push(...returnedObj);

          if (!recursive) {
          } else {
            dataUrlsOfTown.push(...arrayObjectsUrlOfPage);
            return getCountryObjects(propCountry, countPageCards);
          }

          return arrayObjectsUrlOfPage;
        })
        .catch(async (err) => {
          errorCount++;

          console.log(
            `err with url func. errorCount - ${errorCount}. numCookie - ${randomCookie}.url ${url}`,
          );

          randomCookie = randomNum(cookieTripadvisor.length - 1);
          //   await getCountryObjects(propCountry, countPageCards);

          if (errorCount % 10 === 0) {
            await delay(randomMinute(5, 7));
          }
          if (errorCount % 100 === 0) {
            await delay(randomMinute(50, 90));
          }
          if (errorCount === requestCount) {
            await delay(randomMinute(120, 180));
          }
          if (errorCount === requestCount + 15) {
            mustStop = true;
          }
          console.log(
            `err with url func.good request - ${requestCount}. errorCount - ${errorCount}. numCookie - ${randomCookie}.url ${url}`,
          );
          randomCookie = randomNum(cookieTripadvisor.length);

          await getCountryObjects(propCountry, countPageCards);
        });
      return data;
    };
    await getCountryObjects(country, 0);

    return {
      // country: country,
      // towns: town,
      data: dataUrlsOfTown,
    };
  };

  const countries = getInFile('countries');

  const returnedData: {
    success: IUrlsObjectsWithTowns[];
    errors: ICountryTrip[];
  } = {
    success: [],
    errors: [],
  };

  const fetchAllData = async () => {
    for (const country of countries) {
      const newDataCountryWithTown: IUrlsObjectsWithTowns = {
        country: country,
        towns: [],
        data: [],
      };
      if (mustStop) {
        console.log('mustStop!!!!!');
        return;
      }
      const dataTownUrls: { data: ITownTrip[] } = await getData(country);
      newDataCountryWithTown.towns = dataTownUrls.data;
      // console.log(`${country.towns.length} - all towns`);
      returnedData.success.push(newDataCountryWithTown);
    }
  };
  await fetchAllData();

  returnedData.errors.push(...errorObjects);

  rewriteToFile('cafe/countryWithTowns', returnedData);
  console.log(`request - ${requestCount}, errors - ${errorCount}`);

  return { data: returnedData, message: statusMessage };
};

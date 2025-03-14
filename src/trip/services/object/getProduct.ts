import axios from 'axios';
import jsdom = require('jsdom');

import { getInFile } from 'src/asset/components/fs/getInFile';
import { appendToFile } from 'src/asset/components/fs/appendToFile';
import {
  ICountryTrip,
  IMessageStatus,
  IUrlObject,
  IUrlObjectData,
  IUrlsObjects,
  IUrlsObjectsWithTowns,
} from 'src/asset/types/commonTypes';
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';
import { axiosJsonTrip } from 'src/asset/components/axiosJsonTrip';
import { constructorCafe } from 'src/asset/components/constructor/constructorCafe';
import { constructorHotel } from 'src/asset/components/constructor/constructorHotel';
import { delay } from 'src/asset/components/delay';
import { randomMinute } from 'src/asset/components/randomMinute';
import { getNamesInFolder } from 'src/asset/components/fs/getNamesInFolder';
import { constructorActivities } from 'src/asset/components/constructor/constructorActivities';
// import { constructorActivities } from 'src/asset/components/constructor/constructorActivities';
const { JSDOM } = jsdom;

function randomNum(count: number) {
  return Math.floor(Math.random() * count);
}

export const getProduct = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: [],
  };
  let requestCount = 0;
  let randomCookie = cookieTripadvisor.length - 1;
  let errorCount = 0;

  const getData = async (country: IUrlObject) => {
    // console.log(` ${JSON.stringify(country.country.country)} start`);

    const getObjectData = async (propCountry: any) => {
      if (!propCountry.url) {
        console.log(propCountry);

        return;
      }
      const url = `https://www.tripadvisor.ru/${propCountry.url}`;
      console.log(url);

      const getData = await axiosJsonTrip({ url: url, cookieNum: randomCookie })
        .then(async (res) => {
          //   return res;
          // await delay(randomMinute(0.05, 0.09));
          requestCount++;
          console.log(
            `${requestCount} request, err - ${errorCount}, cookie ${randomCookie}/${
              cookieTripadvisor.length - 1
            }`,
          );
          if (requestCount % 10 === 0) {
            await delay(randomMinute(0.05, 0.09));
          }
          const dataOfPage: any[] = [];

          for (const key in res) {
            const stringKey: string = res[key].data;
            // const regValidate = '{"list":{"isComplete":';
            const regValidate = '"RestaurantPresentation_getBestNearby';
            // dataOfPage.push(JSON.parse(res[key].data));
            // if (stringKey.includes(regValidate)) {
            const resultArray = JSON.parse(res[key].data);

            dataOfPage.push(resultArray);
            // }
          }

          return dataOfPage;
        })
        .catch(async (err) => {
          errorCount++;

          await delay(randomMinute(0.05, 0.09));
          console.log(
            `🚨 Got 403 Forbidden with url func - ${url}, numCookie - ${randomCookie}, good - ${requestCount},err - ${errorCount}`,
          );
          randomCookie = randomNum(cookieTripadvisor.length);
          statusMessage.title = `${'Tripadvisor'} something happens (parsing)`;
          statusMessage.error = err;
          if (errorCount % 5 === 0) {
            await delay(randomMinute(5, 10));
          }

          if (errorCount % 50 === 0) {
            await delay(randomMinute(50, 90));
          }
          if (errorCount === requestCount) {
            await delay(randomMinute(120, 180));
          }
          await getObjectData(propCountry);
          // if (errorCount === requestCount + 15) {
          //   mustStop = true;
          // }
        });
      return getData;
    };
    const returnData = await getObjectData(country);
    return returnData;
  };
  const targetCountriesString = [
    // 'Belarus',
    // 'Armenia',
    // 'Georgia',
    // 'United Arab Emirates',
    'Türkiye',
    // 'Kazakhstan',
    // 'Russia',
  ];
  // const countriesFiles: any = getNamesInFolder(
  //   'done/activities/urlBigData',
  // ) as any[];
  // for (
  //   let indexTarget = 0;
  //   indexTarget < targetCountriesString.length;
  //   indexTarget++
  // ) {
  //   const targetCountry = targetCountriesString[indexTarget];

  //   const findCountryFile = countriesFiles.find(
  //     (countryFile) => countryFile === targetCountry,
  //   );
  //   const findCountryFileData = getInFile(
  //     `done/activities/urlBigData/${findCountryFile}`,
  //   );
  // }
  const country = getInFile(`done/cafe/urlBigData/${'Türkiye'}`);
  const objectTest = country.data.find((item) => item.id === 26803780) as any;

  const globalObject = (await getData(objectTest)) as any[];
  const constructorData = constructorCafe(globalObject);

  return { data: constructorData, message: statusMessage };
};

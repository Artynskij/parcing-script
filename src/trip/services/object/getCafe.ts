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
const { JSDOM } = jsdom;

export const getCafe = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  let count = 0;
  const errorArray: ICountryTrip[] = [];

  const getData = async (country: IUrlObject) => {
    // console.log(` ${JSON.stringify(country.country.country)} start`);

    const getObjectData = async (propCountry: any) => {
      const url = `https://www.tripadvisor.ru/${propCountry.url}`;
      console.log(url);

      const getData = await axiosJsonTrip({ url: url, cookieNum: 0 })
        .then((res) => {
          //   return res;
          count++;
          console.log(`${count} request`);

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
        .catch((err) => {
          errorArray.push(country.country);
          console.log(err);
          console.log(`err with url func - ${url}`);
          statusMessage.title = `${'Tripadvisor'} something happens (parsing)`;
          statusMessage.error = err;
        });
      return getData;
    };
    const returnData = await getObjectData(country);
    return returnData;
  };
  const country: any = getInFile('done/cafe/urlBigData/Russia');
  const objectTest = country.data.find((item) => item.id === 3320362) as any; // https://www.tripadvisor.ru/Restaurant_Review-g298484-d3320362-Reviews-Butcher_Steak_House-Moscow_Central_Russia.html
  const dataRet = (await getData(objectTest)) as any[];
  const constructorData = constructorCafe(dataRet);
  //   console.log(constructorData);

  return { data: constructorData, message: statusMessage };
};

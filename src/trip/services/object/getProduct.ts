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
import { constructorActivities } from 'src/asset/components/constructor/constructorActivities';
const { JSDOM } = jsdom;

export const getProduct = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: [],
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
          errorArray.push(propCountry.url);
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
  // 1724195 hotel https://www.tripadvisor.ru//Hotel_Review-g298484-d1724195-Reviews-Lotte_Hotel_Moscow-Moscow_Central_Russia.html
  // 1901737 hotel https://www.tripadvisor.ru//Hotel_Review-g298484-d1724195-Reviews-Lotte_Hotel_Moscow-Moscow_Central_Russia.html
  // 3320362 cafe https://www.tripadvisor.ru/Restaurant_Review-g298484-d3320362-Reviews-Butcher_Steak_House-Moscow_Central_Russia.html
  // 12992459 cafe https://www.tripadvisor.ru//Restaurant_Review-g298507-d12992459-Reviews-PkhaliKhinkali-St_Petersburg_Northwestern_District.html
  // 300086 activities https://www.tripadvisor.ru/Attraction_Review-g1207894-d300086-Reviews-Grand_Peterhof_Palace-Peterhof_Petrodvortsovy_District_St_Petersburg_Northwestern.html
  const country: any = getInFile('done/cafe/urlBigData/Russia') as any[];
  const retTestData = [];

  // for (let i = 0; i < country.data.length && i <= 20; i++) {
  //   const globalObject = (await getData(country.data[i + 100])) as any[];

  //   const constructorData = constructorActivities(globalObject);

  //   retTestData.push(constructorData);
  // }
  const objectTest = country.data.find((item) => item.id === 3320362) as any;

  const globalObject = (await getData(objectTest)) as any[];
  const constructorData = constructorCafe(globalObject);
  // appendToFile('/maks/activitiesTrip', globalObject);
  return { data: constructorData, message: statusMessage };
};

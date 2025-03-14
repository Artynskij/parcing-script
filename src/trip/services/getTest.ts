import axios from 'axios';
import jsdom = require('jsdom');

import { getInFile } from 'src/asset/components/fs/getInFile';
import { appendToFile } from 'src/asset/components/fs/appendToFile';
import {
  ICountryTrip,
  IMessageStatus,
  IUrlObjectData,
  IUrlsObjects,
  IUrlsObjectsWithTowns,
} from 'src/asset/types/commonTypes';
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';
import { axiosJsonTrip } from 'src/asset/components/axiosJsonTrip';
const { JSDOM } = jsdom;

export const getTest = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  let count = 0;
  const errorArray: ICountryTrip[] = [];
  // const bigArray: { country: ICountryTrip; count: number }[] = [];
  // const normArray: { country: ICountryTrip; count: number }[] = [];

  const getData = async (country: IUrlsObjects) => {
    console.log(` ${JSON.stringify(country.country.country)} start`);
    const dataUrlsOfCountry: IUrlObjectData[] = [];
    const getCountryObjects = async (
      propCountry: any,
      propsCountPageCards = 0,
    ) => {
      const url = propsCountPageCards
        ? `https://www.tripadvisor.com/Attractions-g${propCountry.id}-Activities-c47-oa${propsCountPageCards}-${propCountry.hrefName}.html`
        : `https://www.tripadvisor.com/Attractions-g${propCountry.id}-Activities-c47-${propCountry.country}.html`;
      console.log(url);

      const getData = await axiosJsonTrip({ url: url, cookieNum: 0 })
        .then((res) => {
          // return res;
          count++;
          console.log(`${count} request`);

          const dataOfPage: any[] = [];

          for (const key in res) {
            const stringKey: string = res[key].data;
            // const regValidate = '{"list":{"isComplete":';
            const regValidate = '"Result';
            // dataOfPage.push(JSON.parse(res[key].data));
            if (stringKey.includes(regValidate)) {
              const resultArray = JSON.parse(res[key].data)['Result'][0][
                'sections'
              ];
              // console.log(resultArray.length);
              resultArray.forEach((item) => {
                if (item.sectionId === 'FILTER_SORT_DISCLAIMER') {
                  if (item.tooltip.labelText.text.includes('+')) {
                    console.log(item.tooltip.labelText.text);
                  }
                }
                if (item.sectionId === 'POI_LIST_CARD') {
                  console.log(item.singleFlexCardContent.cardTitle.text);
                }
              });
              dataOfPage.push(resultArray);
            }
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
    const returnData = await getCountryObjects(country, 0);
    return returnData;

    return {
      country: country,
      data: dataUrlsOfCountry,
    };
  };
  const countries: any[] = getInFile('countries');
  const countryTest = countries.find((item) => item.id === 60665);
  const dataRet = await getData(countryTest);

  // const fetchAllData = async () => {
  //   for (const country of countries) {
  //     await getData(country);
  //     //   pageData.push(dataCountry);
  //   }
  // };
  // await fetchAllData();

  //   writeToFile(JSON.stringify(returnData), 'reverse/countiesPagination');
  return { data: dataRet, message: statusMessage };
};

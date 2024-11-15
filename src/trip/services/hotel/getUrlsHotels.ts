import axios from 'axios';
import jsdom = require('jsdom');

import { getInFile } from 'src/asset/components/fs/getInFile';
import { appendToFile } from 'src/asset/components/fs/appendToFile';
import {
  ICountryTrip,
  IMessageStatus,
  IUrlObjectData,
  IUrlsObjects,
} from 'src/asset/types/commonTypes';
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';
const { JSDOM } = jsdom;

export const getUrlsHotels = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  let count = 0;

  const errorObjects: ICountryTrip[] = [];
  const getData = async (country: ICountryTrip) => {
    console.log(` ${country.country} start`);
    const dataUrlsOfCountry: IUrlObjectData[] = [];
    const getCountryObjects = async (
      propCountry: ICountryTrip,
      propsCountPageCards = 0,
    ) => {
      let recursive = false;
      let countPageCards = propsCountPageCards;
      const url = countPageCards
        ? `https://www.tripadvisor.com/Hotels-g${country.id}-oa${countPageCards}-${country.hrefName}-Hotels.html`
        : `https://www.tripadvisor.com/Hotels-g${country.id}-${country.hrefName}-Hotels.html`;
      const data = await axios({
        url: url,
        headers: {
          'Accept-Language':
            'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,bm;q=0.6,sq;q=0.5',

          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          Cookie: cookieTripadvisor[3],
        },
      })
        .then((res) => {
          count++;
          console.log(`${count} request`);

          const dom = new JSDOM(res.data);
          const document = dom.window.document;
          const scripts = document.querySelectorAll('script');
          const arrayObjectsUrlOfPage: IUrlObjectData[] = [];

          scripts.forEach((script) => {
            if (script.src.includes('data:text/javascript')) {
              // encoding script start -----------------------------
              const dataScriptContent = script.src.split(',')[1];
              const decodedContent = decodeURIComponent(dataScriptContent);
              const jsonStartIndex =
                decodedContent.indexOf('JSON') + 'JSON.parse('.length;
              const jsonEndIndex = decodedContent.lastIndexOf(')))');
              const jsonString = decodedContent.slice(
                jsonStartIndex,
                jsonEndIndex,
              );
              const jsonData = JSON.parse(JSON.parse(jsonString)).urqlSsrData
                .results;
              // encoding script end -----------------------------
              for (const key in jsonData) {
                const stringKey: string = jsonData[key].data;
                const regValidate = '{"list":{"isComplete":';
                if (stringKey.includes(regValidate)) {
                  recursive = true;
                  countPageCards += 30;
                  const resultArray = JSON.parse(jsonData[key].data).list
                    .results;
                  resultArray.forEach((item) => {
                    const url = item.location.url;
                    const id = item.locationId;
                    const name = item.location.locationV2.names.name;
                    const parent = item.location.locationV2.names.parentGeo;
                    const type = item.location.detail.__typename;
                    const returnedObj = {
                      url: url as string,
                      id: +id as number,
                      name: name as string,
                      type: type as string,
                      parent: parent as string,
                    };
                    arrayObjectsUrlOfPage.push(returnedObj);
                  });
                }
              }
            }
          });
          if (!recursive) {
            console.log(
              ` ${country.country} end! ${dataUrlsOfCountry.length} url of objects`,
            );
          } else {
            dataUrlsOfCountry.push(...arrayObjectsUrlOfPage);
            return getCountryObjects(propCountry, countPageCards);
          }

          // return getData();

          return arrayObjectsUrlOfPage;
        })
        .catch((err) => {
          errorObjects.push(propCountry);
          console.log(`err with url func - ${url}`);
          statusMessage.title = `${'Tripadvisor'} something happens (parsing)`;
          statusMessage.error = err;
        });
      return data;
    };
    await getCountryObjects(country, 0);

    return {
      country: country,
      data: dataUrlsOfCountry,
    };
  };

  // const countries: ICountryTrip[] = getInFile('reverse/countiesPagination').bigData;
  const countries: { success: IUrlsObjects[]; errors: ICountryTrip[] } =
    getInFile('hotels/urlsBigData');

  const pageData: { success: IUrlsObjects[]; errors: ICountryTrip[] } = {
    success: [],
    errors: [],
  };

  // pageData.success = countries.success.filter((item) => item.data.length !== 0);
  const fetchAllData = async () => {
    for (const country of countries.errors) {
      const dataCountry: IUrlsObjects = await getData(country);
      pageData.success.push(dataCountry);
    }
  };
  await fetchAllData();
  pageData.errors.push(...errorObjects);
  // writeToFile(JSON.stringify(pageData), 'hotels/urlsNormData3');
  return { data: pageData, message: statusMessage };
};

import axios from 'axios';
import jsdom = require('jsdom');

import { getInFile } from 'src/asset/components/fs/getInFile';
import { appendToFile } from 'src/asset/components/fs/appendToFile';
import {
  ICountryTrip,
  IMessageStatus,
  ITownTrip,
  IUrlObjectData,
  IUrlsObjects,
  IUrlsObjectsWithTowns,
} from 'src/asset/types/commonTypes';
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';
import { rewriteToFile } from 'src/asset/components/fs/rewriteToFile';
const { JSDOM } = jsdom;

export const getTowns = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  let count = 0;

  const errorObjects: ICountryTrip[] = [];
  const getData = async (
    country: ICountryTrip,
  ): Promise<IUrlsObjectsWithTowns> => {
    console.log(` ${country.country} start`);
    const dataUrlsOfCountry: IUrlObjectData[] = [];
    const dataUrlsTowns: ITownTrip[] = [];
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
          Cookie: cookieTripadvisor[4],
        },
      })
        .then((res) => {
          count++;
          console.log(`${count} request`);

          const dom = new JSDOM(res.data);
          const document = dom.window.document;
          const scripts = document.querySelectorAll('script');
          const arrayObjectsUrlOfPage: IUrlObjectData[] = [];
          const arrayTownsOfPage: ITownTrip[] = [];

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
                    const urlOfHighlight = (item.location.url as string).split(
                      '-',
                    );
                    urlOfHighlight[0] = 'Hotels';
                    const endUrl =
                      urlOfHighlight[urlOfHighlight.length - 1].split('.');
                    const href = `/${urlOfHighlight[0]}-${urlOfHighlight[1]}-${endUrl[0]}-Hotels.html`;
                    const hrefName = endUrl[0];
                    const id = item.location.locationV2.hierarchy.parentGeoId;

                    const town =
                      item.location.locationV2.hierarchy.parent.names.name;

                    const parent =
                      item.location.locationV2.contact.streetAddress.state;

                    const returnedObj: ITownTrip = {
                      id: +id,
                      href: href,
                      hrefName: hrefName,
                      town: town,
                      country: country.country,
                      parent: parent,
                    };

                    if (
                      !arrayTownsOfPage.find((item) => item.id === +id) &&
                      !dataUrlsTowns.find((item) => item.id === +id)
                    ) {
                      arrayTownsOfPage.push(returnedObj);
                    }
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
            // dataUrlsOfCountry.push(...arrayObjectsUrlOfPage);
            dataUrlsTowns.push(...arrayTownsOfPage);

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
      towns: dataUrlsTowns,
      data: dataUrlsOfCountry,
    };
  };

  const countries: {
    success: IUrlsObjectsWithTowns[];
    errors: ICountryTrip[];
  } = getInFile('hotels/urlsBigDataTowns');
  const pageData: { success: IUrlsObjectsWithTowns[]; errors: ICountryTrip[] } =
    {
      success: countries.success.filter((item) => {
        const findEl = countries.errors.find(
          (item2) => item2.id === item.country.id,
        );
        return findEl ? false : true;
      }),
      errors: [],
    };
  //   const testCountry = countries[2];
  //   const dataCountry: IUrlsObjectsWithTowns = await getData(testCountry.country);
  //   console.log(dataCountry.towns.length);

  //   pageData.success.push(dataCountry);
  // const countries: { success: IUrlsObjects[]; errors: ICountryTrip[] } =
  //   getInFile('hotels/urlsNormData2');

  const fetchAllData = async () => {
    for (const country of countries.errors) {
      const dataCountry: IUrlsObjectsWithTowns = await getData(country);
      console.log(
        `${dataCountry.country.country} - ${dataCountry.towns.length} towns`,
      );
      //   const findCountry = pageData.success.find(
      //     (item) => item.country.id === dataCountry.country.id,
      //   );

      pageData.success.push(dataCountry);
    }
  };
  await fetchAllData();
  pageData.errors.push(...errorObjects);
  rewriteToFile('hotels/urlsBigDataTowns2', pageData);
  return { data: pageData, message: statusMessage };
};

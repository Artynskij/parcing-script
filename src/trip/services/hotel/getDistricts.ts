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
import { cookieTripadvisor } from 'src/asset/utils/cookieTrip';
import { axiosJsonTrip } from 'src/asset/components/axiosJsonTrip';
import { rewriteToFile } from 'src/asset/components/fs/rewriteToFile';

export const getDistricts = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  function randomNum() {
    return Math.floor(Math.random() * cookieTripadvisor.length);
  }
  let randomCookie = cookieTripadvisor.length - 1;
  let count = 0;
  let errorCount = 0;
  const errorObjects: IErrorRecursion[] = [];
  const getData = async (country: ICountryTrip, town: ITownTrip) => {
    console.log(` ${country.country}, ${town.town} start`);
    const dataUrlsOfTown: IUrlObjectData[] = [];
    const getCountryObjects = async (
      propCountry: ICountryTrip,
      propsCountPageCards = 0,
    ) => {
      const recursive = false;
      const countPageCards = propsCountPageCards;
      const newID = town.href.split('-')[1];
      const url = `https://www.tripadvisor.com/Hotels-${newID}-${town.hrefName}-Hotels.html`;
      // ? `https://www.tripadvisor.com/Hotels-${newID}-oa${countPageCards}-${town.hrefName}-Hotels.html`

      const data = await axiosJsonTrip({ url: url, cookieNum: randomCookie })
        .then((res: any) => {
          count++;
          console.log(`${count} request`);

          const arrayObjectsUrlOfPage: IUrlObjectData[] = [];

          for (const key in res) {
            const stringKey: string = res[key].data;
            const regValidate = '{"list":{"isComplete":';
            if (stringKey.includes(regValidate)) {
              //   recursive = true;
              //   countPageCards += 30;
              const resultArray = JSON.parse(res[key].data).list.results;
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
                  town: town.town,
                };
                arrayObjectsUrlOfPage.push(returnedObj);
              });
            }
          }

          if (!recursive) {
            console.log(
              ` ${country.country}, ${town.town} end! ${dataUrlsOfTown.length} url of objects`,
            );
          } else {
            dataUrlsOfTown.push(...arrayObjectsUrlOfPage);
            return getCountryObjects(propCountry, countPageCards);
          }

          return arrayObjectsUrlOfPage;
        })
        .catch(async (err) => {
          errorObjects.push({ cookie: randomCookie, object: town });
          errorCount++;

          console.log(
            `err with url func. errorCount - ${errorCount}. numCookie - ${randomCookie}.url ${url}`,
          );
          randomCookie = randomNum();
          //   await getCountryObjects(propCountry, countPageCards);
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

  const countries: {
    success: IUrlsObjectsWithTowns[];
    errors: ICountryTrip[];
  } = getInFile('hotels/urlsBigDataTowns');

  const returnedData: {
    success: IUrlsObjectsWithTowns[];
    errors: IErrorRecursion[];
  } = {
    success: [],
    errors: [],
  };

  const fetchAllData = async () => {
    for (const country of countries.success) {
      for (const town of country.towns) {
        const dataTownUrls: { data: IUrlObjectData[] } = await getData(
          country.country,
          town,
        );
        country.data.push(...dataTownUrls.data);
      }
      console.log(`${country.data.length} - all urls`);
      returnedData.success.push(country);
    }
  };
  await fetchAllData();

  returnedData.errors.push(...errorObjects);
  // writeToFile('hotels/urlsBigData', returnedData);
  rewriteToFile('hotels/urlsBigData', returnedData);
  return { data: returnedData, message: statusMessage };
};

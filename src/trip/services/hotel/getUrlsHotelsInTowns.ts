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
import { getNamesInFolder } from 'src/asset/components/fs/getNamesInFolder';
import { delay } from 'src/asset/components/delay';
import { randomMinute } from 'src/asset/components/randomMinute';

export const getUrlsHotelsInTowns = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  function randomNum(count: number) {
    return Math.floor(Math.random() * count);
  }
  let mustStop = false;
  const randomAgent = userAgentTripadvisor.length - 1;
  let randomCookie = cookieTripadvisor.length - 1;
  let requestCount = 0;
  let errorCount = 0;
  const errorObjects: IErrorRecursion[] = [];
  const getData = async (country: ICountryTrip, town: ITownTrip) => {
    console.log(` ${country.country}, ${town.town} start`);
    const dataUrlsOfTown: IUrlObjectData[] = [];
    const getCountryObjects = async (
      propCountry: ICountryTrip,
      propsCountPageCards = 0,
    ): Promise<IUrlObjectData[]> => {
      if (mustStop) {
        console.log('mustStop!!!!!');
        return;
      }
      let recursive = false;
      let countPageCards = propsCountPageCards;
      const newID = town.href.split('-')[1];
      const url = countPageCards
        ? `https://www.tripadvisor.com/Hotels-${newID}-oa${countPageCards}-${town.hrefName}-Hotels.html`
        : `https://www.tripadvisor.com/Hotels-${newID}-${town.hrefName}-Hotels.html`;

      try {
        if (requestCount % 10 === 0) {
          await delay(randomMinute(0.05, 0.09));
          // randomAgent = randomNum(userAgentTripadvisor.length);
        }

        const res = await axiosJsonTrip({
          url: url,
          cookieNum: randomCookie,
          userAgent: randomAgent,
        });
        requestCount++;
        console.log(`${requestCount} request`);

        const arrayObjectsUrlOfPage: IUrlObjectData[] = [];

        for (const key in res) {
          const stringKey: string = res[key].data;
          const regValidate = '{"list":{"isComplete":';
          if (stringKey.includes(regValidate)) {
            recursive = true;
            countPageCards += 30;
            const resultArray = JSON.parse(res[key].data).list.results;
            resultArray.forEach((item) => {
              const id = item.locationId;
              const url = item.location.url;
              const name = item.location.locationV2.names.name;
              const parent = item.location.locationV2.names.parentGeo;
              const type = item.location.detail.__typename;
              const returnedObj: IUrlObjectData = {
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
          await getCountryObjects(propCountry, countPageCards);
        }

        return arrayObjectsUrlOfPage;
      } catch (err) {
        errorObjects.push({ cookie: randomCookie, object: town });
        errorCount++;
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
      }
      // return data;
    };
    await getCountryObjects(country, 0);

    return {
      data: dataUrlsOfTown,
    };
  };

  const countries: {
    success: IUrlsObjectsWithTowns[];
    errors: ICountryTrip[];
  } = getInFile('hotels/urlsBigDataTowns');
  const files = getNamesInFolder('hotels/countryNotFilter');

  const filterCountries = countries.success.filter(
    (item) => !files.find((item2) => item.country.country === item2),
  );

  const returnedData: {
    success: IUrlsObjectsWithTowns[];
    errors: IErrorRecursion[];
  } = {
    success: [],
    errors: [],
  };

  const fetchAllData = async () => {
    for (const country of filterCountries) {
      for (const town of country.towns) {
        if (mustStop) {
          console.log('mustStop!!!!!');
          return;
        }
        const dataTownUrls: { data: IUrlObjectData[] } = await getData(
          country.country,
          town,
        );
        country.data.push(...dataTownUrls.data);
      }
      console.log(`${country.data.length} - all urls`);
      returnedData.success.push(country);
      rewriteToFile(
        `hotels/countryNotFilter/${country.country.country}`,
        country,
      );
    }
  };
  await fetchAllData();

  returnedData.errors.push(...errorObjects);
  // writeToFile('hotels/urlsBigData', returnedData);

  return { data: returnedData, message: statusMessage };
};

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
import { delay } from 'src/asset/components/delay';
import { randomMinute } from 'src/asset/components/randomMinute';
import { getNamesInFolder } from 'src/asset/components/fs/getNamesInFolder';

export const getUrlsCafeNormData = async () => {
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
    const dataUrlsOfObject: IUrlObjectData[] = [];
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

      const url = propsCountPageCards
        ? `https://www.tripadvisor.com/FindRestaurants?geo=${town.id}&offset=${propsCountPageCards}&broadened=false`
        : `https://www.tripadvisor.com/FindRestaurants?geo=${town.id}&broadened=false`;

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
        console.log(`${requestCount} request , url - ${url}`);

        const arrayObjectsUrlOfPage: IUrlObjectData[] = [];

        for (const key in res) {
          const stringKey: string = res[key].data;
          const regValidate = '{"response":{"__typename"';
          if (stringKey.includes(regValidate)) {
            const resultArray = JSON.parse(res[key].data).response.restaurants;
            if (!resultArray.length) {
              return null;
            }

            resultArray.forEach((item) => {
              const id = item?.locationId || null;

              const url = item?.detailPageRoute?.url || null;
              const name = item?.name || null;
              const parent = item?.taLocation?.names?.parentGeo || null;

              const type = item.cuisines?.items[0]?.tag?.localizedName || null;
              const returnedObj: IUrlObjectData = {
                url: url as string | null,
                id: +id as number | null,
                name: name as string | null,
                type: type as string | null,
                parent: parent as string | null,
                town: parent as string | null,
              };

              arrayObjectsUrlOfPage.push(returnedObj);
            });
            recursive = true;
            countPageCards += 30;
          }
        }

        if (!recursive) {
          console.log(
            ` ${country.country} - ${town.town} end! ${dataUrlsOfObject.length} url of objects`,
          );
        } else {
          dataUrlsOfObject.push(...arrayObjectsUrlOfPage);

          await getCountryObjects(propCountry, countPageCards);
        }

        return arrayObjectsUrlOfPage;
      } catch (err) {
        errorObjects.push({ url: url, country: country, town: town });
        errorCount++;
        console.log(
          `err with url func.good request - ${requestCount}. errorCount - ${errorCount}. numCookie - ${randomCookie}.url ${url}`,
        );
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

        randomCookie = randomNum(cookieTripadvisor.length);

        await getCountryObjects(propCountry, countPageCards);
      }
      // return data;
    };
    await getCountryObjects(country, 0);

    return {
      data: dataUrlsOfObject,
    };
  };

  const countries: {
    success: IUrlsObjectsWithTowns[];
    errors: ICountryTrip[];
  } = getInFile('cafe/countryWithTowns');
  const files = getNamesInFolder('cafe/countryNotFilter');

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
  // const testCountry = countries.success.filter(
  //   (item) => item.country.id === 190311,
  // );
  const fetchAllData = async () => {
    for (const country of filterCountries) {
      const newDataCountryWithData: IUrlsObjectsWithTowns = {
        country: country.country,
        towns: country.towns,
        data: [],
      };
      console.log(
        `${country.country.country} start. ${
          filterCountries.indexOf(country) + 1
        }/${filterCountries.length}`,
      );

      if (mustStop) {
        console.log('mustStop!!!!!');
        return;
      }
      let countOfTown = 0;
      for (const town of country.towns) {
        countOfTown += 1;
        console.log(
          ` ${country.country.country} - ${town.town} start. ${countOfTown}/${country.towns.length}`,
        );
        const dataUrlsObject: { data: IUrlObjectData[] } = await getData(
          country.country,
          town,
        );
        console.log(
          ` ${country.country.country} : ${town.town}  end,${dataUrlsObject.data.length} - urls.`,
        );
        newDataCountryWithData.data.push(...dataUrlsObject.data);
      }

      console.log(
        `${newDataCountryWithData.country.country} end, ${newDataCountryWithData.data.length} - all urls. `,
      );
      returnedData.success.push(newDataCountryWithData);
      rewriteToFile(
        `cafe/countryNotFilter/${newDataCountryWithData.country.country}`,
        newDataCountryWithData,
      );
    }
  };
  await fetchAllData();

  returnedData.errors.push(...errorObjects);
  rewriteToFile('cafe/countryNotFilter/errors', returnedData.errors);

  return { data: returnedData, message: statusMessage };
};

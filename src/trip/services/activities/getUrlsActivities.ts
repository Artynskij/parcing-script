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
import {
  IActivityTripCategory,
  mockActivitiesTrip,
} from 'src/asset/utils/mockData';
import { appendToFile } from 'src/asset/components/fs/appendToFile';

export const getUrlsActivities = async () => {
  const statusMessage: IMessageStatus = {
    title: `url func all ok`,
    error: null,
  };
  function randomNum(count: number) {
    return Math.floor(Math.random() * count);
  }
  const state = {
    mustStop: false,
    randomAgent: userAgentTripadvisor.length - 1,
    randomCookie: cookieTripadvisor.length - 1,
    requestCount: 0,
    errorCount: 0,
    normDataImport: false,
  };

  const errorObjects: IErrorRecursion[] = [];
  const dataUrlsOfObjectNormData: {
    country: ICountryTrip;
    data: IUrlObjectData[];
  }[] = [];
  const getData = async (
    country: ICountryTrip,
    category: IActivityTripCategory,
  ) => {
    const dataUrlsOfObject: IUrlObjectData[] = [];
    const getCategoryObjects = async (
      propCountry: ICountryTrip,
      propsCountPageCards = 0,
    ): Promise<IUrlObjectData[]> => {
      if (state.mustStop) {
        console.log('mustStop!!!!!');
        return;
      }
      let recursive = false;
      let countPageCards = propsCountPageCards;

      const url = propsCountPageCards
        ? `https://www.tripadvisor.com/Attractions-g${propCountry.id}-Activities-c${category.idTrip}-oa${propsCountPageCards}-${propCountry.hrefName}.html`
        : `https://www.tripadvisor.com/Attractions-g${propCountry.id}-Activities-c${category.idTrip}-${propCountry.hrefName}.html`;

      try {
        if (state.requestCount % 10 === 0) {
          await delay(randomMinute(0.05, 0.09));
        }

        const res = await axiosJsonTrip({
          url: url,
          cookieNum: state.randomCookie,
          userAgent: state.randomAgent,
        });
        state.requestCount++;
        console.log(`${state.requestCount} request , url - ${url}`);

        const arrayObjectsUrlOfPage: IUrlObjectData[] = [];

        for (const key in res) {
          const stringKey: string = res[key].data;
          const regValidate = '"Result';
          if (stringKey.includes(regValidate)) {
            const resultArray = JSON.parse(res[key].data)['Result'][0][
              'sections'
            ];
            if (!resultArray.length) {
              return null;
            }

            resultArray.forEach((item) => {
              if (item.sectionId === 'FILTER_SORT_DISCLAIMER') {
                if (item.tooltip.labelText.text.includes('+')) {
                  state.normDataImport = true;
                }
              }
              if (item.sectionId === 'POI_LIST_CARD') {
                const id = item.singleFlexCardContent?.saveId?.id || null;
                const url =
                  item?.singleFlexCardContent?.cardLink.webRoute.webLinkUrl ||
                  null;
                const name =
                  item?.singleFlexCardContent?.cardTitle?.text || null;
                // под вопросом
                const parent = null;
                const type = category.name.en || null;

                const returnedObj: IUrlObjectData = {
                  url: url as string | null,
                  id: +id as number | null,
                  name: name as string | null,
                  type: type as string | null,
                  parent: parent as string | null,
                  town: parent as string | null,
                };

                arrayObjectsUrlOfPage.push(returnedObj);
              }
            });
            if (resultArray.length >= 30) {
              recursive = true;
              countPageCards += 30;
            } else {
              recursive = false;
            }
          }
        }

        if (!recursive) {
          if (arrayObjectsUrlOfPage.length) {
            dataUrlsOfObject.push(...arrayObjectsUrlOfPage);
          }
          console.log(
            ` ${country.country} category end! ${dataUrlsOfObject.length} url of objects`,
          );
        } else {
          dataUrlsOfObject.push(...arrayObjectsUrlOfPage);

          await getCategoryObjects(propCountry, countPageCards);
        }

        return arrayObjectsUrlOfPage;
      } catch (err) {
        errorObjects.push({ url: url, country: country });
        state.errorCount++;
        console.log(
          `err with url func.good request - ${state.requestCount}. errorCount - ${state.errorCount}. numCookie - ${state.randomCookie}.url ${url}`,
        );
        if (state.errorCount % 10 === 0) {
          await delay(randomMinute(5, 7));
        }
        if (state.errorCount % 100 === 0) {
          await delay(randomMinute(50, 90));
        }
        if (state.errorCount === state.requestCount) {
          await delay(randomMinute(120, 180));
        }
        if (state.errorCount === state.requestCount + 15) {
          state.mustStop = true;
        }

        state.randomCookie = randomNum(cookieTripadvisor.length);

        await getCategoryObjects(propCountry, countPageCards);
      }
      // return data;
    };
    await getCategoryObjects(country, 0);

    return {
      data: dataUrlsOfObject,
    };
  };

  const countries: ICountryTrip[] = getInFile('countries');

  const files: string[] = getNamesInFolder('activities/countryNotFilter');
  const countriesNormData: { country: ICountryTrip; data: IUrlsObjects[] }[] =
    getInFile('activities/urlsNormDataActivities');

  const filterCountries = countries
    .filter((item) => !files.find((itemFile) => itemFile === item.country))
    .filter(
      (item) =>
        !countriesNormData.find(
          (itemNormData) => itemNormData.country.country === item.country,
        ),
    );

  const returnedData: {
    success: IUrlsObjects[];
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
      const newDataCountryWithData: IUrlsObjects = {
        country: country,

        // towns: country.towns,
        data: [],
      };
      console.log(
        `${country.country} start. ${countries.indexOf(country) + 1}/${
          countries.length
        }`,
      );

      if (state.mustStop) {
        console.log('mustStop!!!!!');
        return;
      }
      let countOfCategory = 0;
      for (const category of mockActivitiesTrip) {
        countOfCategory += 1;
        console.log(
          ` ${country.country}  ${countOfCategory}/${mockActivitiesTrip.length} category`,
        );
        const dataUrlsObject: { data: IUrlObjectData[] } = await getData(
          country,
          category,
        );
        newDataCountryWithData.data.push(...dataUrlsObject.data);
      }
      //   const dataUrlsObject: { data: IUrlObjectData[] } = await getData(country);
      //   newDataCountryWithData.data.push(...dataUrlsObject.data);
      console.log(
        `${newDataCountryWithData.country.country} end, ${newDataCountryWithData.data.length} - all urls. `,
      );
      returnedData.success.push(newDataCountryWithData);
      if (state.normDataImport) {
        await rewriteToFile(
          `activities/countryNotFilter/${country.country}`,
          newDataCountryWithData,
        );
      } else {
        // dataUrlsOfObjectNormData.push(newDataCountryWithData);
        const nowNormData = getInFile('activities/urlsNormDataActivities');

        nowNormData.push(newDataCountryWithData);
        await rewriteToFile('activities/urlsNormDataActivities', nowNormData);
      }
      state.normDataImport = false;
    }
  };
  await fetchAllData();

  returnedData.errors.push(...errorObjects);
  // rewriteToFile('cafe/countryNotFilter/errors', returnedData.errors);

  return { data: countriesNormData, message: statusMessage };
};

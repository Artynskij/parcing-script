import { getUrlsCafeNormData } from './services/cafe/getUrlsCafeNormData';
import { Injectable } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { parsingTrip } from './services/tripService';
import { getUrlsHotels } from './services/hotel/getUrlsHotels';
import { getCountries } from './services/getCountries';
import { getInFile } from 'src/asset/components/fs/getInFile';
import { getTest } from './services/getTest';
import { appendToFile } from 'src/asset/components/fs/appendToFile';
import { rewriteToFile } from 'src/asset/components/fs/rewriteToFile';
import { getTowns } from './services/hotel/getTowns';
import { getUrlsHotelsInTowns } from './services/hotel/getUrlsHotelsInTowns';
import { delCopyUrl } from 'src/asset/components/delCopy';
import { getNamesInFolder } from 'src/asset/components/fs/getNamesInFolder';
import {
  ICountryTrip,
  IUrlsObjectsWithTowns,
} from 'src/asset/types/commonTypes';
import { randomMinute } from 'src/asset/components/randomMinute';
import { getDistrictsInCafe } from './services/cafe/getDistrictsInCafe';
import { getUrlsActivities } from './services/activities/getUrlsActivities';
import { mockActivitiesTrip } from 'src/asset/utils/mockData';
import { getObjectTest } from './services/object/getObject';

@Injectable()
export class TripService {
  test() {
    // const res = getUrlsCafeNormData();

    // const res = getTest();
    const res = getObjectTest();

    return res;
  }

  getUrl() {
    const response = 'getUrlsHotels()';
    // const response = getInFile('countries');

    return response;
  }
  seeCountObject() {
    // Big data
    //done/hotel/urlBigData
    //activities/countryNotFilter/{}
    const res1 = getInFile('activities/countryNotFilter/United Arab Emirates');
    //  Small Data
    // const res1 = getInFile('activities/urlsNormDataActivities').find(
    //   (item) => item.country.country === 'United Arab Emirates',
    // );

    return res1.data.length;
  }
}

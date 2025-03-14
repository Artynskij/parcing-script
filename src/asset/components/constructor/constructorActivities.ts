import { isoDaysOfWeek } from './../../utils/isoDays';
// import {
//   IConstructorReturned,
//   ILocationReturned,
// } from './construstorType.type';

export const constructorActivities = (globalObject: any[]) => {
  const mainActivityInfoParse = globalObject.find((item) => {
    if (Array.isArray(item['Result'])) {
      return item['Result'][0]?.container?.navTitle;
    }
    return false;
  })?.Result[0];
  const gptInfoParse = globalObject.find((item) => item.gptInfo)?.gptInfo[0]
    ?.pageLevelTargeting;
  const additionalActivityInfoParse = JSON.parse(
    mainActivityInfoParse?.container?.jsonLd,
  );
  const scheduleParse = mainActivityInfoParse?.detailSectionGroups
    ?.find((item) => {
      if (item.clusterId === 'LIST_SECTION_GROUP') {
        return item.detailSections.find(
          (item) => item.sectionId === 'OPEN_HOURS',
        );
      } else false;
    })
    ?.detailSections.find((item) => item.sectionId === 'OPEN_HOURS');
  const coordParse = mainActivityInfoParse?.detailSectionGroups?.find(
    (item) => {
      return item.clusterId === 'LOCATION_SECTION_GROUP' && item.staticMap;
    },
  );
  const tagsLocaleParse = mainActivityInfoParse?.detailSectionGroups?.find(
    (item) =>
      item.clusterId === 'LIST_SECTION_GROUP' && item.detailSections[0]?.tags,
  )?.detailSections[0];

  const breadcrumbParse = globalObject.find((item) => {
    return item['breadcrumbsData'];
  })?.breadcrumbsData.breadcrumbs;
  const mediaParse = globalObject
    .find((item) => {
      return item.mediaWindow?.windowPanes[0].albums;
    })
    ?.mediaWindow?.windowPanes[0].albums.map((item) => {
      if (!item) return;
      const mediaList = item.mediaList.map((photo) => {
        return {
          idTrip: photo.mediaId,
          caption: photo.caption,
          image: photo.photoSizes[photo.photoSizes.length - 1],
        };
      });
      return { tripMediaCount: item.totalMediaCount, media: mediaList };
    });
  const seoParse = globalObject.find((item) => {
    return item['Opf_getOnPageFactorsForLocale'];
  })?.Opf_getOnPageFactorsForLocale[0]?.factors;

  const rating = {
    count: additionalActivityInfoParse?.aggregateRating?.reviewCount,
    rate: additionalActivityInfoParse?.aggregateRating?.ratingValue,
    additional: null,
  };
  const location = () => ({
    countryIso: null,
    addressString: coordParse?.location?.address?.address || null,
    address: {
      city: additionalActivityInfoParse?.address?.addressLocality || null,
      state: null,
      postalCode: additionalActivityInfoParse?.address?.postalCode || null,
      street1: null,
      street2: null,
    },
    parentArea: [
      {
        locationId: null,
        placeType: 'CITY',
        title: additionalActivityInfoParse?.address?.addressLocality || null,
      },
      {
        locationId: null,
        placeType: 'COUNTRY',
        title: additionalActivityInfoParse?.address?.addressCountry || null,
      },
    ],
    coord: {
      latitude: coordParse?.staticMap?.center['latitude'] || null,
      longitude: coordParse?.staticMap?.center['longitude'] || null,
    },
    neighborhoods: null,
  });
  const schedule = scheduleParse?.poiHours?.fullSchedule.map((item) => {
    const arrIntervals = item.intervals[0].split('-');
    return {
      day:
        isoDaysOfWeek.find((day) => item.day.text === day.title)?.key ||
        item.day.text,
      close_time: arrIntervals[1],
      open_time: arrIntervals[0],
    };
  });
  const tags = () => {
    const keysParse = gptInfoParse.find((item) => item.key === 'attractype')
      ?.value as string[];
    const valuesKeys = tagsLocaleParse?.tags?.text.split(' • ') as string[];
    if (!keysParse && !valuesKeys) {
      return [
        {
          key: 'category_activities',
          value: null,
        },
      ];
    }
    return [
      {
        key: 'category_activities',
        value: keysParse.map((key, index) => ({
          tagKey: key || null,
          title: valuesKeys[index] || null,
          idTripCategory: null,
          tagIcon: null,
          secondaryValue: null,
          visibleTrip: null,
        })),
      },
    ];
  };
  const returnData = {
    tripId: mainActivityInfoParse?.container?.locationData?.locationId,
    title: mainActivityInfoParse?.container?.locationData?.locationName,
    description: null,
    rating: rating,
    placeType: 'ATTRACTION',
    category: null,
    price: null,
    contacts: { phoneNumber: null, email: null },
    tags: tags(),
    location: location(),
    tripBreadcrumb: breadcrumbParse,
    additional: null,
    seoTrip: seoParse,
    schedule: schedule,
    media: mediaParse,
  };
  return returnData;
};

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
  };
  const location = {
    addressString: coordParse?.location?.address?.address,
    address: {
      postalCode: additionalActivityInfoParse?.address?.postalCode,
    },
    parentArea: {
      town: additionalActivityInfoParse?.address?.addressLocality,
      country: additionalActivityInfoParse?.address?.addressCountry,
    },
    coord: {
      latitude: coordParse?.staticMap?.center['latitude'],
      longitude: coordParse?.staticMap?.center['longitude'],
    },
    // neighborhoods: locationNeighborhoodsParse['neighborhoods'],
  };
  const schedule = scheduleParse?.poiHours?.fullSchedule.map((item) => {
    return {
      day: item.day.text,
      time: item.intervals,
    };
  });
  const tags = {
    keys: gptInfoParse.find((item) => item.key === 'attractype')?.value || null,
    value: tagsLocaleParse?.tags?.text,
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
    tags: tags,
    location: location,
    tripBreadcrumb: breadcrumbParse,
    additional: null,
    seoTrip: seoParse,
    schedule: schedule,
    media: mediaParse,
    translateData: null,
  };
  return returnData;
};

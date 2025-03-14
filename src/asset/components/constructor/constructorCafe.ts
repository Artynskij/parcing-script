export const constructorCafe = (globalObject: any) => {
  const mainInfoCafeParse = globalObject.find((item) => {
    return item['RestaurantPresentation_searchRestaurantsById'];
  })?.RestaurantPresentation_searchRestaurantsById['restaurants'][0];
  const locationObjectParse = globalObject.filter((item) => {
    if (Array.isArray(item['locations'])) {
      return (
        item['locations'][0]['locationId'] &&
        item['locations'][0]['isoCountryCode']
      );
    }
    return false;
  })[0]['locations'][0];
  const seoParse = globalObject.find((item) => {
    return item['Opf_getOnPageFactorsForLocale'];
  })?.Opf_getOnPageFactorsForLocale[0]?.factors;
  const breadcrumbParse = globalObject.find((item) => {
    return item['breadcrumbsData'];
  })?.breadcrumbsData.breadcrumbs;
  const currentLocationParse = globalObject.find((item) => {
    return item['currentLocation'];
  })?.currentLocation[0];
  const schedule = () => {
    const schedule = mainInfoCafeParse?.open_hours?.schedule;
    const formattedSchedule = Object.keys(schedule).map((day) => {
      return {
        day: day,
        close_time: schedule[day][0].close_time,
        open_time: schedule[day][0].open_time,
      };
    });
    return formattedSchedule;
  };

  const mediaParse = globalObject
    .filter((item) => {
      return item['mediaWindow'];
    })[1]
    ['mediaWindow']['windowPanes'][0].albums.map((item) => {
      if (!item) return;
      const mediaList = item.mediaList.map((photo) => {
        return {
          idTrip: photo?.mediaId,
          caption: photo?.caption,
          image: photo?.photoSizes[photo.photoSizes.length - 1],
        };
      });
      return { tripMediaCount: item.totalMediaCount, media: mediaList };
    });

  const filterTags = [
    {
      key: 'topTags',
      value: [
        ...(mainInfoCafeParse?.topTags.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
    {
      key: 'cuisines',
      value: [
        ...(mainInfoCafeParse.cuisines.items.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
    {
      key: 'price_types',
      value: [
        ...(mainInfoCafeParse.price_types.items.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
    {
      key: 'diets',
      value: [
        ...(mainInfoCafeParse.diets.items.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
    {
      key: 'meal_types',
      value: [
        ...(mainInfoCafeParse.meal_types.items.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
    {
      key: 'dining_options',
      value: [
        ...(mainInfoCafeParse.dining_options.items.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
    {
      key: 'establishment_types',
      value: [
        ...(mainInfoCafeParse.establishment_types.items.map((tag) => {
          return {
            idTripCategory: tag.id,
            title: tag.tag.localizedName,
            secondaryValue: tag.secondary_name,
            categoryName: null,
            categoryIcon: null,
            visibleTrip: null,
          };
        }) || []),
      ],
    },
  ];

  const rating = {
    count: mainInfoCafeParse?.reviewSummary?.count,
    rate: mainInfoCafeParse?.reviewSummary?.rating,
    additional: mainInfoCafeParse?.sub_ratings,
  };
  const returnData = {
    tripId: locationObjectParse?.locationId,
    title: mainInfoCafeParse?.name,
    description: mainInfoCafeParse?.description,
    rating: rating,
    placeType: 'EATER',
    category:
      mainInfoCafeParse?.establishment_types?.items[0]?.tag?.localizedName,
    price: {
      currency: mainInfoCafeParse.price_range.currency,
      min_price: mainInfoCafeParse.price_range.min_price,
      max_price: mainInfoCafeParse.price_range.max_price,
      type_price:
        mainInfoCafeParse?.price_types.items[0]?.secondary_name?.length,
    },
    contacts: { phoneNumber: mainInfoCafeParse?.telephone },
    tags: filterTags,
    location: {
      countryIso: locationObjectParse?.isoCountryCode,
      addressString: mainInfoCafeParse?.localizedRealtimeAddress,
      address: locationObjectParse?.localizedStreetAddress,
      parentArea: locationObjectParse?.parent,
      coord: {
        latitude: locationObjectParse?.latitude,
        longitude: locationObjectParse?.longitude,
      },
      neighborhoods: locationObjectParse?.neighborhoods,
    },
    tripBreadcrumb: breadcrumbParse,
    additional: 'additional',
    seoTrip: seoParse,
    schedule: schedule(),
    media: mediaParse,
    translateData: 'translateData',
  };
  return returnData;
};

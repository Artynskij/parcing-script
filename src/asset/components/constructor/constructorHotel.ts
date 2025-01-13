export const constructorHotel = (globalObject: any[]) => {
  const mainHotelInfoParse = globalObject.find((item) => {
    if (Array.isArray(item['locations'])) {
      return item['locations'][0]?.detail?.hotelAmenities;
    }
    return false;
  })?.locations[0];
  const breadcrumbParse = globalObject.find((item) => {
    return item['breadcrumbsData'];
  })?.breadcrumbsData.breadcrumbs;
  const seoParse = globalObject.find((item) => {
    return item['Opf_getOnPageFactorsForLocale'];
  })?.Opf_getOnPageFactorsForLocale[0]?.factors;
  const categoryInfoParse = globalObject.find((item) => {
    if (Array.isArray(item['locations'])) {
      return item['locations'][0]?.accommodationCategory;
    }
    return false;
  })?.locations[0];
  const locationNeighborhoodsParse = globalObject.filter((item, index) => {
    return item.locations?.[0]?.neighborhoods || false;
  })[0]?.locations[0];

  const currentLocationParse = globalObject.find((item) => {
    return item['currentLocation'];
  })?.currentLocation[0];
  const streetAddress = globalObject.find((item) => {
    if (Array.isArray(item['locationInfo'])) {
      return item['locationInfo'][0]['streetAddress'];
    }
    return false;
  })?.locationInfo[0];
  const mediaParse = globalObject
    .filter((item) => {
      return item['mediaWindow'];
    })[1]
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

  const filterTags = [
    {
      key: 'roomFeatures',
      value: [
        ...(mainHotelInfoParse?.detail.hotelAmenities.highlightedAmenities?.roomFeatures?.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.amenityNameLocalized,
              categoryName: tag.amenityCategoryName,
              categoryIcon: tag.amenityIcon,
              visibleTrip: true,
            };
          },
        ) || []),
        ...(mainHotelInfoParse?.detail.hotelAmenities.nonHighlightedAmenities?.roomFeatures?.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.amenityNameLocalized,
              categoryName: tag.amenityCategoryName,
              categoryIcon: tag.amenityIcon,
              visibleTrip: false,
            };
          },
        ) || []),
      ],
    },
    {
      key: 'roomTypes',
      value: [
        ...(mainHotelInfoParse?.detail.hotelAmenities.highlightedAmenities?.roomTypes?.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.amenityNameLocalized,
              categoryName: tag.amenityCategoryName,
              categoryIcon: tag.amenityIcon,
              visibleTrip: true,
            };
          },
        ) || []),
        ...(mainHotelInfoParse?.detail.hotelAmenities.nonHighlightedAmenities?.roomTypes?.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.amenityNameLocalized,
              categoryName: tag.amenityCategoryName,
              categoryIcon: tag.amenityIcon,
              visibleTrip: false,
            };
          },
        ) || []),
      ],
    },
    {
      key: 'propertyAmenities',
      value: [
        ...(mainHotelInfoParse?.detail.hotelAmenities.highlightedAmenities?.propertyAmenities?.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.amenityNameLocalized,
              categoryName: tag.amenityCategoryName,
              categoryIcon: tag.amenityIcon,
              visibleTrip: true,
            };
          },
        ) || []),
        ...(mainHotelInfoParse?.detail.hotelAmenities.nonHighlightedAmenities?.propertyAmenities?.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.amenityNameLocalized,
              categoryName: tag.amenityCategoryName,
              categoryIcon: tag.amenityIcon,
              visibleTrip: false,
            };
          },
        ) || []),
      ],
    },
    {
      key: 'starRating',
      value: [
        ...(mainHotelInfoParse?.detail.starRating.map((tag) => {
          return {
            idTripCategory: tag.tagId,
            title: tag.tagNameLocalized,
            categoryName: 'stars',
            categoryIcon: null,
            visibleTrip: true,
          };
        }) || []),
      ],
    },
    {
      key: 'styleRankings',
      value: [
        ...(mainHotelInfoParse?.detail.styleRankings.map((tag) => {
          return {
            idTripCategory: tag.tagId,
            title: tag.translatedName,
            categoryName: tag.tagName,
            categoryIcon: false,
            visibleTrip: true,
          };
        }) || []),
      ],
    },
  ];
  const rating = () => {
    const _ratingsParse = mainHotelInfoParse?.detail.hotel.reviewSubratingAvgs;
    const arrayTripID = {
      47: 'location',
      11: 'rooms',
      13: 'priceQuality',
      14: 'clean',
      12: 'service',
    };
    const ratings = Object.keys(arrayTripID).reduce((acc, id) => {
      const key = arrayTripID[Number(id)];
      const foundItem = _ratingsParse.find(
        (item) => item.questionId === Number(id),
      );
      acc[key] = foundItem ? foundItem.avgRating : null;
      return acc;
    }, {});

    return {
      count: mainHotelInfoParse.reviewSummary.count,
      rate: mainHotelInfoParse.reviewSummary.rating,
      additional: ratings,
    };
  };
  const location = {
    addressString: currentLocationParse['streetAddress']['fullAddress'],
    address: streetAddress['streetAddress'],
    parentArea: locationNeighborhoodsParse['parents'],
    coord: {
      latitude: currentLocationParse['latitude'],
      longitude: currentLocationParse['longitude'],
    },
    neighborhoods: locationNeighborhoodsParse['neighborhoods'],
  };
  const translateData = [
    {
      key: 'title',
      value: currentLocationParse?.localizedNames,
    },
    {
      key: 'streetAddress',
      value: currentLocationParse?.localizedStreetAddresses,
    },
  ];
  const returnData = {
    tripId: mainHotelInfoParse?.locationId,
    title: mainHotelInfoParse?.name,
    description: mainHotelInfoParse?.locationDescription,
    rating: rating(),
    placeType: categoryInfoParse?.placeType,
    category: categoryInfoParse?.accommodationCategory,
    price: locationNeighborhoodsParse?.detail.priceRange,
    contacts: null,
    tags: filterTags,
    location: location,
    tripBreadcrumb: breadcrumbParse,
    additional: locationNeighborhoodsParse?.detail?.hotel.details,
    seoTrip: seoParse,
    schedule: mainHotelInfoParse?.open_hours?.schedule || null,
    media: mediaParse,
    translateData: translateData,
  };
  return returnData;
};

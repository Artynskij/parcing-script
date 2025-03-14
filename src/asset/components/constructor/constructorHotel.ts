export const constructorHotel = (globalObject: any[]) => {
  const mainHotelInfoParse = globalObject.find((item) => {
    if (Array.isArray(item['locations'])) {
      return item?.hotelAmenities;
    }
    return false;
  });
  // return mainHotelInfoParse;
  const breadcrumbParse = globalObject.find((item) => {
    return item['breadcrumbsData'];
  })?.breadcrumbsData.breadcrumbs;
  const seoParse = globalObject.find((item) => {
    return item['Opf_getOnPageFactorsForLocale'];
  })?.Opf_getOnPageFactorsForLocale[0]?.factors;
  const categoryInfoParse = globalObject.find((item) => {
    if (Array.isArray(item['locations'])) {
      return (
        item['locations'][0]?.accommodationCategory &&
        item['locations'][0]?.placeType
      );
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
  const rating = () => {
    const _ratingsParse =
      mainHotelInfoParse?.locations[0].detail?.hotel.reviewSubratingAvgs;
    const arrayTripID = {
      47: 'location',
      11: 'rooms',
      13: 'priceQuality',
      14: 'clean',
      12: 'service',
      190: 'sleep',
    };
    const ratings = Object.keys(arrayTripID).reduce((acc, id) => {
      const key = arrayTripID[Number(id)];
      const foundItem = _ratingsParse?.find(
        (item) => item.questionId === Number(id),
      );
      acc[key] = foundItem ? foundItem.avgRating : null;
      return acc;
    }, {});

    return {
      count: mainHotelInfoParse?.reviewSummaryInfo[0].responseData?.count,
      rate: mainHotelInfoParse?.reviewSummaryInfo[0].responseData?.rating,
      additional: ratings,
    };
  };
  const price = {
    currency: 'RUB',
    min_price: locationNeighborhoodsParse?.detail.priceRange?.minimum || null,
    max_price: locationNeighborhoodsParse?.detail.priceRange?.maximum || null,
    type_price: null,
  };
  const contacts = () => {
    const _phoneParse =
      mainHotelInfoParse.locations[0].businessAdvantageData?.contactLinks?.find(
        (item) => !!item.rawPhone,
      );

    return {
      webSite:
        mainHotelInfoParse.locations[0].businessAdvantageData?.specialOffer
          ?.lightboxClickUrl || null,
      phoneNumber: _phoneParse?.rawPhone || null,
    };
  };
  const filterTags = [
    {
      key: 'roomFeatures',
      value: [
        ...(mainHotelInfoParse?.hotelAmenities[0].highlightedAmenities?.roomFeatures?.map(
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
        ...(mainHotelInfoParse?.hotelAmenities[0].nonHighlightedAmenities?.roomFeatures?.map(
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
        ...(mainHotelInfoParse?.hotelAmenities[0].highlightedAmenities?.roomTypes?.map(
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
        ...(mainHotelInfoParse?.hotelAmenities[0].nonHighlightedAmenities?.roomTypes?.map(
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
        ...(mainHotelInfoParse?.hotelAmenities[0].highlightedAmenities?.propertyAmenities?.map(
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
        ...(mainHotelInfoParse?.hotelAmenities[0].nonHighlightedAmenities?.propertyAmenities?.map(
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
      key: 'languagesSpoken',
      value: [
        ...(mainHotelInfoParse?.hotelAmenities[0].languagesSpoken.map((tag) => {
          return {
            idTripCategory: tag.tagId,
            title: tag.amenityNameLocalized,
            categoryName: tag.amenityNameLocalized,
            categoryIcon: null,
            visibleTrip: true,
          };
        }) || []),
      ],
    },
    {
      key: 'starRating',
      value: [
        ...(mainHotelInfoParse?.locations[0]?.detail?.starRating.map((tag) => {
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
        ...(mainHotelInfoParse?.locations[0]?.detail?.styleRankings.map(
          (tag) => {
            return {
              idTripCategory: tag.tagId,
              title: tag.translatedName,
              categoryName: tag.tagName,
              categoryIcon: false,
              visibleTrip: true,
            };
          },
        ) || []),
      ],
    },
  ];

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
    tripId: mainHotelInfoParse?.locations[0].locationId || null,
    title: mainHotelInfoParse?.locations[0].name || null,
    description: mainHotelInfoParse?.locations[0].locationDescription || null,
    rating: rating(),
    placeType: categoryInfoParse?.placeType || null,
    category: mainHotelInfoParse?.geoInfo[0].accommodationType || null,
    price: price,
    contacts: contacts(),
    tags: filterTags || null,
    location: location || null,
    tripBreadcrumb: breadcrumbParse || null,
    additional: locationNeighborhoodsParse?.detail?.hotel.details || null,
    seoTrip: seoParse || null,
    schedule: mainHotelInfoParse?.open_hours?.schedule || null,
    media: mediaParse || null,
    translateData: translateData,
  };
  return returnData;
};

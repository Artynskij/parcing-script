export interface IConstructorReturned {
  tripId: number | string;
  title: string;
  description: string;
  rating: {
    count: number;
    rate: number;
    additional: {
      atmosphere?: number;
      food?: number;
      service?: number;
      value?: number;
      rooms?: number;
      priceQuality?: number;
      clean?: number;
      location?: number;
    } | null;
  };
  placeType: 'ACCOMMODATION' | 'EATER' | 'ATTRACTION';
  category: { key: string; title: string } | null;
  tags: {
    key: string;
    value:
      | null
      | {
          idTripCategory: number | null;
          title: string | null;
          tagKey: string | null;
          tagIcon: string | null;
          secondaryValue: string | null;
          visibleTrip: boolean | null;
        }[];
  }[];
  location: ILocationReturned;
  tripBreadcrumb: {
    text: string;
    url: string;
    localizedText: string | null;
  };
  additional: { numRooms: number; menu: any };
  seoTrip: {
    key: string;
    value: string | null;
  };
  schedule:
    | null
    | {
        day: {
          key: 'monday';
          title: 'понедельник';
        };
        time: {
          start: string;
          end: string;
        };
      }[];
  media: {
    tripMediaCount: number;
    photos:
      | null
      | {
          idTrip: number;
          caption: string;
          image: {
            width: number;
            height: number;
            url: string;
          };
        }[];
  };
}
export interface ILocationReturned {
  countryIso: string | null;
  addressString: string | null;
  address: {
    city: string | null;
    state: string | null;
    postalCode: string | null;
    street1: string | null;
    street2: string | null;
  };
  parentArea: {
    locationId: number | null;
    placeType: 'CITY' | 'REGION' | 'COUNTRY' | 'CONTINENT' | null;
    title: string | null;
  }[];
  coord: {
    latitude: number | null;
    longitude: number | null;
  };
  neighborhoods:
    | {
        name: string;
        tripId: number | null;
      }[]
    | null;
}

const cafe1 = {
  data: {
    // tripId: 2419130,
    // title: 'Ресторан White Rabbit',
    // description:
    //   "В 2017 году ресторан White Rabbit занял 23-е место в престижном мировом рейтинге The World's 50 Best Restaurants, основанным авторитетным британским журналом The Restaurants и интернациональной The Diners Club Academy.",
    // rating: {
    //   count: 3654,
    //   rate: 4,
    //   additional: {
    //     atmosphere: 4.4592834,
    //     food: 4.4195757,
    //     service: 4.0331306,
    //     value: 3.9269624,
    //   },
    // },
    // placeType: 'EATER',
    // category: 'Рестораны',
    // price: { currency: 'RUB', min_price: 7559, max_price: 8063, type_price: 4 },
    // contacts: { phoneNumber: '+7 (495) 149-29-71' },
    // tags: [
    //   {
    //     key: 'topTags',
    //     value: [
    //       { idTrip: 10954, value: 'Высокая кухня', secondaryValue: '$$$$' },
    //       { idTrip: 10669, value: 'Современная', secondaryValue: null },
    //       {
    //         idTrip: 10665,
    //         value: 'Подходит вегетарианцам',
    //         secondaryValue: null,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'cuisines',
    //     value: [{ idTrip: 10669, value: 'Современная', secondaryValue: null }],
    //   },
    //   {
    //     key: 'price_types',
    //     value: [
    //       { idTrip: 10954, value: 'Высокая кухня', secondaryValue: '$$$$' },
    //     ],
    //   },
    //   {
    //     key: 'diets',
    //     value: [
    //       {
    //         idTrip: 10665,
    //         value: 'Подходит вегетарианцам',
    //         secondaryValue: null,
    //       },
    //       { idTrip: 10697, value: 'Веганская кухня', secondaryValue: null },
    //       {
    //         idTrip: 10992,
    //         value: 'Варианты без глютена',
    //         secondaryValue: null,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'meal_types',
    //     value: [
    //       { idTrip: 10598, value: 'Обед', secondaryValue: null },
    //       { idTrip: 10599, value: 'Ужин', secondaryValue: null },
    //       { idTrip: 10606, value: 'Бранч', secondaryValue: null },
    //       { idTrip: 10704, value: 'Открыто допоздна', secondaryValue: null },
    //     ],
    //   },
    //   {
    //     key: 'dining_options',
    //     value: [
    //       { idTrip: 10602, value: 'Бронирование', secondaryValue: null },
    //       {
    //         idTrip: 10603,
    //         value: 'Столики на открытом воздухе',
    //         secondaryValue: null,
    //       },
    //       { idTrip: 10702, value: 'Банкет', secondaryValue: null },
    //       { idTrip: 10852, value: 'Места для сидения', secondaryValue: null },
    //       { idTrip: 10854, value: 'Имеется парковка', secondaryValue: null },
    //       { idTrip: 10862, value: 'Подают алкоголь', secondaryValue: null },
    //       { idTrip: 10863, value: 'Бар', secondaryValue: null },
    //       { idTrip: 10865, value: 'American Express', secondaryValue: null },
    //       { idTrip: 10866, value: 'Mastercard', secondaryValue: null },
    //       { idTrip: 10867, value: 'Visa', secondaryValue: null },
    //       { idTrip: 10870, value: 'Бесплатный Wi-Fi', secondaryValue: null },
    //       {
    //         idTrip: 11780,
    //         value: 'Принимаются кредитные карты',
    //         secondaryValue: null,
    //       },
    //       {
    //         idTrip: 16547,
    //         value: 'Обслуживание посетителей за столиками',
    //         secondaryValue: null,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'establishment_types',
    //     value: [{ idTrip: 10591, value: 'Рестораны', secondaryValue: null }],
    //   },
    // ],
    // location: {
    //   countryIso: 'RU',
    //   addressString:
    //     'Смоленская площадь, 3 Смоленский Пассаж, 16 этаж, Москва 121099 Россия',
    //   address: {
    //     city: 'Москва',
    //     state: null,
    //     postalCode: '121099',
    //     street1: 'Смоленская площадь, 3',
    //     street2: 'Смоленский Пассаж, 16 этаж',
    //   },
    //   parentArea: { locationId: 298484, localizedName: 'Москва' },
    //   coord: { latitude: 55.747578, longitude: 37.581287 },
    //   neighborhoods: [
    //     { name: 'Центральный округ (ЦАО)' },
    //     { name: 'Арбат' },
    //     { name: 'Третье транспортное кольцо (ТТК)' },
    //   ],
    // },
    // tripBreadcrumb: [
    //   {
    //     text: 'Европа',
    //     url: '/Tourism-g4-Europe-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Россия',
    //     url: '/Tourism-g294459-Russia-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Центральный округ',
    //     url: '/Tourism-g298479-Central_Russia-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Москва',
    //     url: '/Tourism-g298484-Moscow_Central_Russia-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: null,
    //     url: '/Restaurants-g298484-Moscow_Central_Russia.html',
    //     localizedText: 'Рестораны Москвы',
    //     obfuscated: false,
    //   },
    // ],
    // additional: 'additional',
    // seoTrip: [
    //   {
    //     key: 'META_DESCRIPTION',
    //     value:
    //       'Ресторан White Rabbit, Москва: просмотрите 3 654 объективных отзывов о Ресторан White Rabbit с оценкой 4.0 из 5 на сайте Tripadvisor и рейтингом 99 среди 11 621 ресторанов в Москве.',
    //   },
    //   {
    //     key: 'MASTHEAD_H1',
    //     value: 'Ресторан White Rabbit, Москва, Центральный округ',
    //   },
    //   {
    //     key: 'TITLE',
    //     value: 'Ресторан White Rabbit, Москва - фото ресторана - Tripadvisor',
    //   },
    //   { key: 'MAIN_H1', value: 'Ресторан White Rabbit' },
    //   { key: 'IS_INDEXABLE', value: 'true' },
    // ],
    schedule: {
      sun: [{ close_time: '00:00:00', open_time: '12:00:00' }],
      mon: [{ close_time: '00:00:00', open_time: '12:00:00' }],
      tue: [{ close_time: '00:00:00', open_time: '12:00:00' }],
      wed: [{ close_time: '00:00:00', open_time: '12:00:00' }],
      thu: [{ close_time: '00:00:00', open_time: '12:00:00' }],
      fri: [{ close_time: '00:00:00', open_time: '12:00:00' }],
      sat: [{ close_time: '00:00:00', open_time: '12:00:00' }],
    },
    // media: [
    //   {
    //     tripMediaCount: 3592,
    //     media: [
    //       {
    //         idTrip: 462536630,
    //         caption: 'интерьер',
    //         image: {
    //           width: 1280,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/91/bf/b6/caption.jpg',
    //         },
    //       },
    //     ],
    //   },
    // ],
    // translateData: 'translateData',
  },
  message: { title: 'url func all ok', error: [] },
};
const cafe2 = {
  data: {
    // tripId: 13005195,
    // title: 'Кондитерская Франсуа Бодреро',
    // description: null,
    // rating: {
    //   count: 62,
    //   rate: 4,
    //   additional: {
    //     atmosphere: null,
    //     food: 4.2272725,
    //     service: 3.8181818,
    //     value: 4.142857,
    //   },
    // },
    // placeType: 'EATER',
    // category: 'Булочные',
    // price: { currency: 'RUB', min_price: 20, max_price: 1300, type_price: 8 },
    // contacts: { phoneNumber: '+7 495 199-19-98' },
    // tags: [
    //   {
    //     key: 'topTags',
    //     value: [
    //       {
    //         idTrip: 10955,
    //         value: 'Средний ценовой сегмент',
    //         secondaryValue: '$$ - $$$',
    //       },
    //       { idTrip: 9901, value: 'Булочные', secondaryValue: null },
    //       { idTrip: 5086, value: 'Французская', secondaryValue: null },
    //       { idTrip: 10642, value: 'Кафе', secondaryValue: null },
    //     ],
    //   },
    //   {
    //     key: 'cuisines',
    //     value: [
    //       { idTrip: 5086, value: 'Французская', secondaryValue: null },
    //       { idTrip: 10642, value: 'Кафе', secondaryValue: null },
    //       { idTrip: 10654, value: 'Европейская', secondaryValue: null },
    //     ],
    //   },
    //   {
    //     key: 'price_types',
    //     value: [
    //       {
    //         idTrip: 10955,
    //         value: 'Средний ценовой сегмент',
    //         secondaryValue: '$$ - $$$',
    //       },
    //     ],
    //   },
    //   { key: 'diets', value: [] },
    //   {
    //     key: 'meal_types',
    //     value: [
    //       { idTrip: 10597, value: 'Завтрак', secondaryValue: null },
    //       { idTrip: 10949, value: 'Напитки', secondaryValue: null },
    //     ],
    //   },
    //   {
    //     key: 'dining_options',
    //     value: [
    //       { idTrip: 10601, value: 'Еда на вынос', secondaryValue: null },
    //       { idTrip: 10852, value: 'Места для сидения', secondaryValue: null },
    //     ],
    //   },
    //   {
    //     key: 'establishment_types',
    //     value: [
    //       { idTrip: 9901, value: 'Булочные', secondaryValue: null },
    //       { idTrip: 9909, value: 'Десерты', secondaryValue: null },
    //       { idTrip: 16556, value: 'Быстрые перекусы', secondaryValue: null },
    //     ],
    //   },
    // ],
    // location: {
    //   countryIso: 'RU',
    //   addressString: 'ул. Сретенка, 9 Petrovaka st, 19, Москва 107045 Россия',
    //   address: {
    //     city: 'Москва',
    //     state: null,
    //     postalCode: '107045',
    //     street1: 'ул. Сретенка, 9',
    //     street2: 'Petrovaka st, 19',
    //   },
    //   parentArea: { locationId: 298484, localizedName: 'Москва' },
    //   coord: { latitude: 55.765182, longitude: 37.61637 },
    //   neighborhoods: [
    //     { name: 'Бульварное кольцо' },
    //     { name: 'Центральный округ (ЦАО)' },
    //     { name: 'Тверской' },
    //     { name: 'Петровка' },
    //     { name: 'Садовое кольцо' },
    //     { name: 'Третье транспортное кольцо (ТТК)' },
    //   ],
    // },
    // tripBreadcrumb: [
    //   {
    //     text: 'Европа',
    //     url: '/Tourism-g4-Europe-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Россия',
    //     url: '/Tourism-g294459-Russia-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Центральный округ',
    //     url: '/Tourism-g298479-Central_Russia-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Москва',
    //     url: '/Tourism-g298484-Moscow_Central_Russia-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: null,
    //     url: '/Restaurants-g298484-Moscow_Central_Russia.html',
    //     localizedText: 'Рестораны Москвы',
    //     obfuscated: false,
    //   },
    // ],
    // additional: 'additional',
    // seoTrip: [
    //   {
    //     key: 'META_DESCRIPTION',
    //     value:
    //       'Кондитерская Франсуа Бодреро, Москва: просмотрите 62 объективных отзывов о Кондитерская Франсуа Бодреро с оценкой 4.0 из 5 на сайте Tripadvisor и рейтингом 1 773 среди 11 621 ресторанов в Москве.',
    //   },
    //   {
    //     key: 'MASTHEAD_H1',
    //     value: 'Кондитерская Франсуа Бодреро, Москва, Центральный округ',
    //   },
    //   {
    //     key: 'TITLE',
    //     value:
    //       'Кондитерская Франсуа Бодреро, Москва - фото ресторана - Tripadvisor',
    //   },
    //   { key: 'MAIN_H1', value: 'Кондитерская Франсуа Бодреро' },
    //   { key: 'IS_INDEXABLE', value: 'true' },
    // ],
    schedule: {
      sun: [{ close_time: '22:00:00', open_time: '09:00:00' }],
      mon: [{ close_time: '22:00:00', open_time: '08:00:00' }],
      tue: [{ close_time: '22:00:00', open_time: '08:00:00' }],
      wed: [{ close_time: '22:00:00', open_time: '08:00:00' }],
      thu: [{ close_time: '22:00:00', open_time: '08:00:00' }],
      fri: [{ close_time: '22:00:00', open_time: '08:00:00' }],
      sat: [{ close_time: '22:00:00', open_time: '09:00:00' }],
    },

    // media: [
    //   {
    //     tripMediaCount: 85,
    //     media: [
    //       {
    //         idTrip: 355248140,
    //         caption: '',
    //         image: {
    //           width: 909,
    //           height: 682,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/15/2c/a8/0c/20181027-152532-01-largejpg.jpg',
    //         },
    //       },
    //     ],
    //   },
    // ],
    // translateData: 'translateData',
  },
  message: { title: 'url func all ok', error: [] },
};

const hotel1 = {
  data: {
    // tripId: 5982033,
    // title: "ayse 'M' sultan Hotel",
    // description: null,
    // rating: {
    //   count: 169,
    //   rate: 4.5,
    //   additional: {
    //     rooms: 4.4,
    //     service: 4.5384617,
    //     priceQuality: 4.529412,
    //     clean: 4.263158,
    //     location: 4.709677,
    //     sleep: 4.7727275,
    //   },
    // },
    // placeType: 'ACCOMMODATION',
    // category: 'T_CONDO',
    // price: { maximum: 4134, minimum: 3325 },
    // contacts: { webSite: null, phoneNumber: null },
    // tags: [
    //   {
    //     key: 'roomFeatures',
    //     value: [
    //       {
    //         idTripCategory: 9658,
    //         title: 'Кондиционер',
    //         categoryName: 'RoomAmenities',
    //         categoryIcon: 'hotels',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 10589,
    //         title: 'Сейф',
    //         categoryName: 'RoomAmenities',
    //         categoryIcon: 'hotels',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9168,
    //         title: 'Мини-кухня',
    //         categoryName: 'KitchenAmenities',
    //         categoryIcon: 'restaurants',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 11269,
    //         title: 'ТВ с плоским экраном',
    //         categoryName: 'Entertainment',
    //         categoryIcon: 'play',
    //         visibleTrip: true,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'roomTypes',
    //     value: [
    //       {
    //         idTripCategory: 9184,
    //         title: 'Номера для некурящих',
    //         categoryName: 'RoomTypes',
    //         categoryIcon: 'hotels',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9659,
    //         title: 'Семейные номера',
    //         categoryName: 'RoomTypes',
    //         categoryIcon: 'hotels',
    //         visibleTrip: true,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'propertyAmenities',
    //     value: [
    //       {
    //         idTripCategory: 9176,
    //         title: 'Бесплатный WiFi',
    //         categoryName: 'Internet',
    //         categoryIcon: 'wifi',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9173,
    //         title: 'Wi-Fi',
    //         categoryName: 'Internet',
    //         categoryIcon: 'wifi',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9179,
    //         title: 'Бесплатный завтрак',
    //         categoryName: 'FoodAndDrink',
    //         categoryIcon: 'food-drink',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9170,
    //         title: 'Трансфер из/до аэропорта',
    //         categoryName: 'Transportation',
    //         categoryIcon: 'taxi',
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9623,
    //         title: 'Услуги прачечной',
    //         categoryName: 'CleaningServices',
    //         categoryIcon: 'dry-cleaning',
    //         visibleTrip: true,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'languagesSpoken',
    //     value: [
    //       {
    //         idTripCategory: 19108,
    //         title: 'Турецкий',
    //         categoryName: 'Турецкий',
    //         categoryIcon: null,
    //         visibleTrip: true,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'starRating',
    //     value: [
    //       {
    //         idTripCategory: 9569,
    //         title: '2 звезды',
    //         categoryName: 'stars',
    //         categoryIcon: null,
    //         visibleTrip: true,
    //       },
    //     ],
    //   },
    //   {
    //     key: 'styleRankings',
    //     value: [
    //       {
    //         idTripCategory: 6216,
    //         title: 'Семейный',
    //         categoryName: 'Family',
    //         categoryIcon: false,
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9704,
    //         title: 'Очаровательный',
    //         categoryName: 'Charming',
    //         categoryIcon: false,
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 11286,
    //         title: 'С красивым видом',
    //         categoryName: 'Great View',
    //         categoryIcon: false,
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 11266,
    //         title: 'Расположение в центре',
    //         categoryName: 'Centrally Located',
    //         categoryIcon: false,
    //         visibleTrip: true,
    //       },
    //       {
    //         idTripCategory: 9706,
    //         title: 'Необычный',
    //         categoryName: 'Quaint',
    //         categoryIcon: false,
    //         visibleTrip: true,
    //       },
    //     ],
    //   },
    // ],
    // location: {
    //   addressString:
    //     'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Стамбул 34410 Турция',
    //   address: {
    //     city: 'Стамбул',
    //     country: 'Турция',
    //     state: null,
    //     postalCode: '34410',
    //     street1: 'Cevirmeci Sokak No:4',
    //     street2: 'Ortakoy / Besiktas',
    //   },
    //   parentArea: [
    //     { locationId: 293974, placeType: 'CITY', name: 'Стамбул' },
    //     { locationId: 293969, placeType: 'COUNTRY', name: 'Турция' },
    //     { locationId: 4, placeType: 'CONTINENT', name: 'Европа' },
    //     { locationId: 1, placeType: null, name: 'Мир' },
    //   ],
    //   coord: { latitude: 41.04895, longitude: 29.02373 },
    //   neighborhoods: [{ id: 7811848, name: 'Бешикташ' }],
    // },
    // tripBreadcrumb: [
    //   {
    //     text: 'Европа',
    //     url: '/Tourism-g4-Europe-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Турция',
    //     url: '/Tourism-g293969-Turkiye-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Стамбул',
    //     url: '/Tourism-g293974-Istanbul-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: null,
    //     url: '/Hotels-g293974-Istanbul-Hotels.html',
    //     localizedText: 'Отели Стамбула',
    //     obfuscated: false,
    //   },
    //   {
    //     text: null,
    //     url: '/Hotels-g293974-c3-zff28-Istanbul-Hotels.html',
    //     localizedText: 'Стамбул: апарт-отели',
    //     obfuscated: false,
    //   },
    // ],
    // additional: { numRooms: 10 },
    // seoTrip: [
    //   {
    //     key: 'META_DESCRIPTION',
    //     value:
    //       "ayse 'M' sultan Hotel, Стамбул: Читайте объективные отзывы и просматривайте фотографии реальных путешественников. Проверяйте местоположение, а также находите ближайшие рестораны и достопримечательности при помощи интерактивной карты Tripadvisor. Сравнивайте цены и выбирайте лучшее спецпредложение для своего проживания.",
    //   },
    //   {
    //     key: 'MASTHEAD_H1',
    //     value:
    //       "AYSE 'M' SULTAN HOTEL (Стамбул) - отзывы, фото и сравнение цен - Tripadvisor",
    //   },
    //   {
    //     key: 'TITLE',
    //     value:
    //       "AYSE 'M' SULTAN HOTEL (Стамбул) - отзывы, фото и сравнение цен - Tripadvisor",
    //   },
    //   { key: 'MAIN_H1', value: "ayse 'M' sultan Hotel" },
    //   { key: 'IS_INDEXABLE', value: 'true' },
    // ],
    schedule: null,
    // media: [
    //   {
    //     tripMediaCount: 65,
    //     media: [
    //       {
    //         idTrip: 303991905,
    //         caption: '',
    //         image: {
    //           width: 960,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/12/1e/8c/61/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 645191695,
    //         caption: '',
    //         image: {
    //           width: 768,
    //           height: 1024,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/26/74/d8/0f/ayse-m-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 645191712,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 768,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/26/74/d8/20/ayse-m-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 645191765,
    //         caption: '',
    //         image: {
    //           width: 768,
    //           height: 1024,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/26/74/d8/55/ayse-m-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 645191738,
    //         caption: '',
    //         image: {
    //           width: 768,
    //           height: 1024,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/26/74/d8/3a/ayse-m-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 645191652,
    //         caption: '',
    //         image: {
    //           width: 768,
    //           height: 1024,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/26/74/d7/e4/ayse-m-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 215405789,
    //         caption: 'kahvaltı büfesi',
    //         image: {
    //           width: 960,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0c/d6/d4/dd/kahvalti-bufesi.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 239528917,
    //         caption: '',
    //         image: {
    //           width: 720,
    //           height: 1280,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0e/46/eb/d5/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 239528903,
    //         caption: '',
    //         image: {
    //           width: 720,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0e/46/eb/c7/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 239528891,
    //         caption: '',
    //         image: {
    //           width: 960,
    //           height: 720,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0e/46/eb/bb/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 239528886,
    //         caption: '',
    //         image: {
    //           width: 960,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0e/46/eb/b6/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 215405790,
    //         caption: 'misafirlerden bir kare',
    //         image: {
    //           width: 4032,
    //           height: 3024,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0c/d6/d4/de/misafirlerden-bir-kare.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451557,
    //         caption: 'manzaramız',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/a5/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451536,
    //         caption: 'odamızdan dış görünüm',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/90/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451528,
    //         caption: 'manzaralı odamız',
    //         image: {
    //           width: 720,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/88/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451516,
    //         caption: 'avusturyalı misafirlerimiz',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/7c/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451512,
    //         caption: 'misafirlerimizden bir kare',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/78/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451504,
    //         caption: 'otel girişimiz',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/70/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451494,
    //         caption: 'misafirlerimizden bir görünüm',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/66/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 91451487,
    //         caption: 'israilli misafirlerimiz',
    //         image: {
    //           width: 2000,
    //           height: 1333,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/73/70/5f/aysem-sultan-hotel.jpg',
    //         },
    //       },
    //     ],
    //   },
    // ],
    // translateData: [
    //   { key: 'title', value: [] },
    //   {
    //     key: 'streetAddress',
    //     value: [
    //       {
    //         locale: 'fr_BE',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turquie',
    //       },
    //       {
    //         locale: 'es_MX',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'es_VE',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'zh_TW',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, 伊斯坦堡 土耳其',
    //       },
    //       {
    //         locale: 'zh_HK',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, 伊斯坦堡 土耳其',
    //       },
    //       {
    //         locale: 'it',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turchia',
    //       },
    //       {
    //         locale: 'ko',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, 이스탄불 터키',
    //       },
    //       {
    //         locale: 'es_CL',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'fi',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turkki',
    //       },
    //       {
    //         locale: 'pt_PT',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istambul 34410 Turquia',
    //       },
    //       {
    //         locale: 'en_US',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'th',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, อิสตันบูล 34410 ตุรกี',
    //       },
    //       {
    //         locale: 'en_SG',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'pt',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istambul 34410 Turquia',
    //       },
    //       {
    //         locale: 'en_UK',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'ar',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, إسطنبول 34410 تركيا',
    //       },
    //       {
    //         locale: 'ru',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Стамбул 34410 Турция',
    //       },
    //       {
    //         locale: 'en_NZ',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'de_CH',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkei',
    //       },
    //       {
    //         locale: 'sk',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turecko',
    //       },
    //       {
    //         locale: 'en_ZA',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'sv',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turkiet',
    //       },
    //       {
    //         locale: 'cs',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turecko',
    //       },
    //       {
    //         locale: 'el',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Κωνσταντινούπολη 34410 Τουρκία',
    //       },
    //       {
    //         locale: 'de_AT',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkei',
    //       },
    //       {
    //         locale: 'nl',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turkije',
    //       },
    //       {
    //         locale: 'hu',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Isztambul 34410 Törökország',
    //       },
    //       {
    //         locale: 'fr_CH',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turquie',
    //       },
    //       {
    //         locale: 'en_AU',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'in',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turki',
    //       },
    //       {
    //         locale: 'vi',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Thổ Nhĩ Kỳ',
    //       },
    //       {
    //         locale: 'fr_CA',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turquie',
    //       },
    //       {
    //         locale: 'es_AR',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'ar_EG',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, إسطنبول 34410 تركيا',
    //       },
    //       {
    //         locale: 'en_MY',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'sr',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turska',
    //       },
    //       {
    //         locale: 'it_CH',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turchia',
    //       },
    //       {
    //         locale: 'da',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Tyrkiet',
    //       },
    //       {
    //         locale: 'es',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'tr',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortaköy / Beşiktaş, İstanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'en_HK',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'en_IE',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'en_CA',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'nl_BE',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turkije',
    //       },
    //       {
    //         locale: 'no',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Tyrkia',
    //       },
    //       {
    //         locale: 'pl',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Stambuł 34410 Turcja',
    //       },
    //       {
    //         locale: 'zh_CN',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, 伊斯坦布尔 土耳其',
    //       },
    //       {
    //         locale: 'es_CO',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'fr',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Turquie',
    //       },
    //       {
    //         locale: 'ja',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, イスタンブール トルコ',
    //       },
    //       {
    //         locale: 'iw',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, איסטנבול 34410 טורקיה',
    //       },
    //       {
    //         locale: 'de',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkei',
    //       },
    //       {
    //         locale: 'en_IN',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //       {
    //         locale: 'zh',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, 伊斯坦布尔 土耳其',
    //       },
    //       {
    //         locale: 'es_PE',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Estambul 34410 Turquía',
    //       },
    //       {
    //         locale: 'en_PH',
    //         fullAddress:
    //           'Cevirmeci Sokak No:4 Ortakoy / Besiktas, Istanbul 34410 Türkiye',
    //       },
    //     ],
    //   },
    // ],
  },
  message: { title: 'url func all ok', error: [] },
};
const hotel2 = {
  data: {
    tripId: 14930175,
    title: 'Sheraton Istanbul City Center',
    description:
      'Titanic Downtown Beyoglu — это отличный выбор для тех, кто приехал в Стамбул. Это хорошее сочетание цены и качества, комфорта и удобства, романтической атмосферы и услуг, призванных сделать пребывание здесь очень приятным.\nВо время пребывания в отеле Titanic Downtown Beyoglu гости могут посетить Дворец Долмабахче (2,2 км) и Мечеть Сулеймание (2,7 км), одни из самых популярных достопримечательностей Стамбула.\nГостям предоставляется бесплатный Wi-Fi. Номера в Titanic Downtown Beyoglu оборудованы кондиционером и мини-баром.\nВо время пребывания здесь воспользуйтесь такими услугами, как обслуживание номеров. К услугам гостей Titanic Downtown Beyoglu также бассейн и лобби.\nНе премините посетить средиземноморские рестораны, например Hatay Medeniyetler Sofrasi Taksim, Olive Anatolian Restaurant и Roof Mezze 360, расположенные недалеко от отеля Titanic Downtown Beyoglu.\nКроме того, во время поездки не забудьте посетить некоторые популярные древние руины, например Цистерна Базилика, Mosaic Museum и Walls of Constantinople (Istanbul City Walls).\nВаш комфорт и удовлетворение — это самое главное для сотрудников Titanic Downtown Beyoglu. Они с нетерпением ждут вас в Стамбуле.',
    rating: {
      count: 1348,
      rate: 5,
      additional: {
        rooms: 4.689873,
        service: 4.8,
        priceQuality: 4.631579,
        clean: 4.806061,
        location: 4.4330482,
        sleep: 4.7115383,
      },
    },
    placeType: 'ACCOMMODATION',
    category: 'T_HOTEL',
    price: { maximum: 14288, minimum: 8807 },
    contacts: {
      webSite:
        '/Commerce?p=Marriott_BA&src=183961798&geo=14930175&from=Hotel_Review&area=OID:15250931|OT:1&slot=1&matchID=1&oos=0&cnt=1&silo=38059&bucket=934872&ubucket=934872&nrank=1&crank=1&clt=SOID&tm=321513744&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkWf5NBGdljl0sDD4rqY3N4ixG1uI-k7Kb6-qQU7mIfk82WmjMlDVcQBfbtRjwYke7A&cs=1e8782c0e33f91325c1ca3aa5f515722b',
      phoneNumber: '810902128061010',
    },
    tags: [
      {
        key: 'roomFeatures',
        value: [
          {
            idTripCategory: 18889,
            title: 'Гипоаллергенный номер',
            categoryName: 'Comfort',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 18905,
            title: 'Шторы, блокирующие свет',
            categoryName: 'Comfort',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 9658,
            title: 'Кондиционер',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 18941,
            title: 'Письменный стол',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 12120,
            title: 'Уборка номеров',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 18932,
            title: 'Кофеварка/чайник',
            categoryName: 'KitchenAmenities',
            categoryIcon: 'restaurants',
            visibleTrip: true,
          },
          {
            idTripCategory: 18918,
            title: 'Кабельное или спутниковое ТВ',
            categoryName: 'Entertainment',
            categoryIcon: 'play',
            visibleTrip: true,
          },
          {
            idTripCategory: 19118,
            title: 'Душевая кабина без поддона на полу',
            categoryName: 'Bath',
            categoryIcon: 'bathroom-fill',
            visibleTrip: true,
          },
          {
            idTripCategory: 18888,
            title: 'Очиститель воздуха',
            categoryName: 'Comfort',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18898,
            title: 'Купальные халаты',
            categoryName: 'Comfort',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19000,
            title: 'Имеются номера с сообщающимися комнатами',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 9161,
            title: 'Обслуживание номеров',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 10589,
            title: 'Сейф',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19066,
            title: 'Отдельная гостиная',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19082,
            title: 'Диван',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19104,
            title: 'Телефон',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19116,
            title: 'VIP-номера',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19120,
            title: 'Шкаф для одежды/встроенный гардероб',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18911,
            title: 'Бутилированная вода',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18930,
            title: 'Напольная вешалка для одежды',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19002,
            title: 'Утюг',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19014,
            title: 'Сейф для ноутбука',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19049,
            title: 'Индивидуальные ванные комнаты',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19107,
            title: 'Кафельный/мраморный пол',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19117,
            title: 'Услуга побудки/будильник',
            categoryName: 'RoomAmenities',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 9666,
            title: 'Мини-бар',
            categoryName: 'KitchenAmenities',
            categoryIcon: 'restaurants',
            visibleTrip: false,
          },
          {
            idTripCategory: 18949,
            title: 'Электрический чайник',
            categoryName: 'KitchenAmenities',
            categoryIcon: 'restaurants',
            visibleTrip: false,
          },
          {
            idTripCategory: 11269,
            title: 'ТВ с плоским экраном',
            categoryName: 'Entertainment',
            categoryIcon: 'play',
            visibleTrip: false,
          },
          {
            idTripCategory: 18897,
            title: 'Ванна/душ',
            categoryName: 'Bath',
            categoryIcon: 'bathroom-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 18972,
            title: 'Бесплатные туалетные принадлежности',
            categoryName: 'Bath',
            categoryIcon: 'bathroom-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 18984,
            title: 'Фен',
            categoryName: 'Bath',
            categoryIcon: 'bathroom-fill',
            visibleTrip: false,
          },
        ],
      },
      {
        key: 'roomTypes',
        value: [
          {
            idTripCategory: 11260,
            title: 'С видом на город',
            categoryName: 'View',
            categoryIcon: 'outdoors',
            visibleTrip: true,
          },
          {
            idTripCategory: 18915,
            title: 'Люкс для новобрачных',
            categoryName: 'RoomTypes',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 9184,
            title: 'Номера для некурящих',
            categoryName: 'RoomTypes',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 9160,
            title: 'Номера-люксы',
            categoryName: 'RoomTypes',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
          {
            idTripCategory: 9659,
            title: 'Семейные номера',
            categoryName: 'RoomTypes',
            categoryIcon: 'hotels',
            visibleTrip: true,
          },
        ],
      },
      {
        key: 'propertyAmenities',
        value: [
          {
            idTripCategory: 16305,
            title: 'Станции зарядки электромобилей',
            categoryName: 'Parking',
            categoryIcon: 'parking',
            visibleTrip: true,
          },
          {
            idTripCategory: 9176,
            title: 'Бесплатный WiFi',
            categoryName: 'Internet',
            categoryIcon: 'wifi',
            visibleTrip: true,
          },
          {
            idTripCategory: 9188,
            title: 'Фитнес-центр',
            categoryName: 'Fitness',
            categoryIcon: 'fitness',
            visibleTrip: true,
          },
          {
            idTripCategory: 6217,
            title: 'Бассейн',
            categoryName: 'Pool',
            categoryIcon: 'pool',
            visibleTrip: true,
          },
          {
            idTripCategory: 9179,
            title: 'Бесплатный завтрак',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: true,
          },
          {
            idTripCategory: 18885,
            title: 'Аэробика',
            categoryName: 'ThingsToDo',
            categoryIcon: 'attractions',
            visibleTrip: true,
          },
          {
            idTripCategory: 12122,
            title: 'Бесплатное размещение для детей',
            categoryName: 'FamilyAmenities',
            categoryIcon: 'family',
            visibleTrip: true,
          },
          {
            idTripCategory: 18926,
            title: 'Детские ТВ-сети',
            categoryName: 'FamilyAmenities',
            categoryIcon: 'family',
            visibleTrip: true,
          },
          {
            idTripCategory: 19112,
            title: 'Услуга парковки автомобиля сотрудником отеля',
            categoryName: 'Parking',
            categoryIcon: 'parking',
            visibleTrip: false,
          },
          {
            idTripCategory: 19051,
            title: 'Платная частная парковка на территории',
            categoryName: 'Parking',
            categoryIcon: 'parking',
            visibleTrip: false,
          },
          {
            idTripCategory: 9173,
            title: 'Wi-Fi',
            categoryName: 'Internet',
            categoryIcon: 'wifi',
            visibleTrip: false,
          },
          {
            idTripCategory: 9178,
            title: 'Платный доступ в Интернет',
            categoryName: 'Internet',
            categoryIcon: 'wifi',
            visibleTrip: false,
          },
          {
            idTripCategory: 18966,
            title: 'Раздевалки в фитнес- и спа-центрах',
            categoryName: 'Fitness',
            categoryIcon: 'fitness',
            visibleTrip: false,
          },
          {
            idTripCategory: 18965,
            title: 'Фитнес-залы',
            categoryName: 'Fitness',
            categoryIcon: 'fitness',
            visibleTrip: false,
          },
          {
            idTripCategory: 19041,
            title: 'Персональный тренер',
            categoryName: 'Fitness',
            categoryIcon: 'fitness',
            visibleTrip: false,
          },
          {
            idTripCategory: 16304,
            title: 'Сауна',
            categoryName: 'Fitness',
            categoryIcon: 'fitness',
            visibleTrip: false,
          },
          {
            idTripCategory: 11285,
            title: 'Крытый бассейн',
            categoryName: 'Pool',
            categoryIcon: 'pool',
            visibleTrip: false,
          },
          {
            idTripCategory: 9166,
            title: 'Бар/лаунж',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18931,
            title: 'Кафетерий',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 9165,
            title: 'Ресторан',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 12111,
            title: 'Возможен завтрак',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 11281,
            title: 'Завтрак по типу "шведский стол"',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18914,
            title: 'Завтрак в номере',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18971,
            title: 'Бесплатный растворимый кофе',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18933,
            title: 'Бесплатный приветственный чай',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18973,
            title: 'Бесплатный приветственный напиток',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18987,
            title: 'Счастливый час',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 19008,
            title: 'Детское меню',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 19080,
            title: 'Буфет',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 19087,
            title: 'Меню для гостей, придерживающихся специальной диеты',
            categoryName: 'FoodAndDrink',
            categoryIcon: 'food-drink',
            visibleTrip: false,
          },
          {
            idTripCategory: 18990,
            title: 'Высокие детские стульчики',
            categoryName: 'FamilyAmenities',
            categoryIcon: 'family',
            visibleTrip: false,
          },
          {
            idTripCategory: 9167,
            title: 'Питомцы разрешены',
            categoryName: 'Pets',
            categoryIcon: 'pet-friendly',
            visibleTrip: false,
          },
          {
            idTripCategory: 12118,
            title: 'Бесплатные услуги трансфера/такси',
            categoryName: 'Transportation',
            categoryIcon: 'taxi',
            visibleTrip: false,
          },
          {
            idTripCategory: 9170,
            title: 'Трансфер из/до аэропорта',
            categoryName: 'Transportation',
            categoryIcon: 'taxi',
            visibleTrip: false,
          },
          {
            idTripCategory: 9157,
            title: 'Автобусный трансфер',
            categoryName: 'Transportation',
            categoryIcon: 'taxi',
            visibleTrip: false,
          },
          {
            idTripCategory: 18921,
            title: 'Аренда автомобилей',
            categoryName: 'Transportation',
            categoryIcon: 'taxi',
            visibleTrip: false,
          },
          {
            idTripCategory: 19103,
            title: 'Услуги такси',
            categoryName: 'Transportation',
            categoryIcon: 'taxi',
            visibleTrip: false,
          },
          {
            idTripCategory: 9187,
            title: 'Бизнес-центр с Wi-Fi',
            categoryName: 'BusinessAmenities',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 9667,
            title: 'Помещения для проведения конференций',
            categoryName: 'BusinessAmenities',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 9657,
            title: 'Банкетный зал',
            categoryName: 'BusinessAmenities',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 9181,
            title: 'Конференц-залы',
            categoryName: 'BusinessAmenities',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 19129,
            title: 'Факс/копировальные услуги в бизнес-центре',
            categoryName: 'BusinessAmenities',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 9169,
            title: 'Спа-комплекс',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18908,
            title: 'Обертывание',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18935,
            title: 'Массаж для двоих',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18956,
            title: 'Косметические процедуры для лица',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18967,
            title: 'Ванна для ног',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18968,
            title: 'Массаж стоп',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18978,
            title: 'Массаж всего тела',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18985,
            title: 'Хаммам',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18986,
            title: 'Массаж рук',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 18988,
            title: 'Массаж головы',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19019,
            title: 'Услуги макияжа',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19021,
            title: 'Маникюр',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19022,
            title: 'Массаж',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19027,
            title: 'Массаж шеи',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19040,
            title: 'Педикюр',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19060,
            title: 'Салон красоты',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19090,
            title: 'Парная',
            categoryName: 'BeautyAndWellness',
            categoryIcon: 'spa',
            visibleTrip: false,
          },
          {
            idTripCategory: 19063,
            title: 'Круглосуточная охрана',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18896,
            title: 'Хранение багажа',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 9656,
            title: 'Консьерж',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18954,
            title: 'Доступ к гостиной представительского класса',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19036,
            title: 'Уличная мебель',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19070,
            title: 'Общая зона для отдыха/просмотра ТВ',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18893,
            title: 'Банкомат на территории',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18945,
            title: 'Швейцар',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18963,
            title: 'Аптечка',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 19110,
            title: 'Зонт',
            categoryName: 'General',
            categoryIcon: 'hotels',
            visibleTrip: false,
          },
          {
            idTripCategory: 18924,
            title: 'Заезд круглосуточно',
            categoryName: 'ReceptionServices',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 18977,
            title: 'Круглосуточная работа стойки регистрации',
            categoryName: 'ReceptionServices',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 18925,
            title: 'Быстрая регистрация при заезде/выезде',
            categoryName: 'ReceptionServices',
            categoryIcon: 'suitcase-fill',
            visibleTrip: false,
          },
          {
            idTripCategory: 9180,
            title: 'Химчистка',
            categoryName: 'CleaningServices',
            categoryIcon: 'dry-cleaning',
            visibleTrip: false,
          },
          {
            idTripCategory: 9623,
            title: 'Услуги прачечной',
            categoryName: 'CleaningServices',
            categoryIcon: 'dry-cleaning',
            visibleTrip: false,
          },
          {
            idTripCategory: 19003,
            title: 'Услуги глажки',
            categoryName: 'CleaningServices',
            categoryIcon: 'dry-cleaning',
            visibleTrip: false,
          },
        ],
      },
      {
        key: 'languagesSpoken',
        value: [
          {
            idTripCategory: 18950,
            title: 'Английский',
            categoryName: 'Английский',
            categoryIcon: null,
            visibleTrip: true,
          },
          {
            idTripCategory: 18890,
            title: 'Арабский',
            categoryName: 'Арабский',
            categoryIcon: null,
            visibleTrip: true,
          },
          {
            idTripCategory: 19108,
            title: 'Турецкий',
            categoryName: 'Турецкий',
            categoryIcon: null,
            visibleTrip: true,
          },
        ],
      },
      {
        key: 'starRating',
        value: [
          {
            idTripCategory: 9572,
            title: '5 звезд',
            categoryName: 'stars',
            categoryIcon: null,
            visibleTrip: true,
          },
        ],
      },
      {
        key: 'styleRankings',
        value: [
          {
            idTripCategory: 11260,
            title: 'Вид на город',
            categoryName: 'City View',
            categoryIcon: false,
            visibleTrip: true,
          },
          {
            idTripCategory: 6233,
            title: 'Модный',
            categoryName: 'Trendy',
            categoryIcon: false,
            visibleTrip: true,
          },
          {
            idTripCategory: 9624,
            title: 'Романтический',
            categoryName: 'Romantic',
            categoryIcon: false,
            visibleTrip: true,
          },
          {
            idTripCategory: 6216,
            title: 'Семейный',
            categoryName: 'Family',
            categoryIcon: false,
            visibleTrip: true,
          },
          {
            idTripCategory: 6296,
            title: 'Бизнес-класс',
            categoryName: 'Business',
            categoryIcon: false,
            visibleTrip: true,
          },
        ],
      },
    ],
    location: {
      addressString:
        'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Стамбул 34440 Турция',
      address: {
        city: 'Стамбул',
        country: 'Турция',
        state: null,
        postalCode: '34440',
        street1: 'Kurtulus Deresi Cad. No 23',
        street2: 'Haci Ahmet Mah',
      },
      parentArea: [
        { locationId: 293974, placeType: 'CITY', name: 'Стамбул' },
        { locationId: 293969, placeType: 'COUNTRY', name: 'Турция' },
        { locationId: 4, placeType: 'CONTINENT', name: 'Европа' },
        { locationId: 1, placeType: null, name: 'Мир' },
      ],
      coord: { latitude: 41.03951, longitude: 28.974892 },
      neighborhoods: [
        { id: 7811847, name: 'Бейоглу' },
        { id: 20933709, name: 'New City / Taksim' },
      ],
    },
    tripBreadcrumb: [
      {
        text: 'Европа',
        url: '/Tourism-g4-Europe-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: 'Турция',
        url: '/Tourism-g293969-Turkiye-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: 'Стамбул',
        url: '/Tourism-g293974-Istanbul-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: null,
        url: '/Hotels-g293974-Istanbul-Hotels.html',
        localizedText: 'Отели Стамбула',
        obfuscated: false,
      },
    ],
    additional: { numRooms: 254 },
    seoTrip: [
      {
        key: 'META_DESCRIPTION',
        value:
          'Sheraton Istanbul City Center, Стамбул: Читайте объективные отзывы и просматривайте фотографии реальных путешественников. Проверяйте местоположение, а также находите ближайшие рестораны и достопримечательности при помощи интерактивной карты Tripadvisor. Сравнивайте цены и выбирайте лучшее спецпредложение для своего проживания.',
      },
      {
        key: 'MASTHEAD_H1',
        value:
          'SHERATON ISTANBUL CITY CENTER (Стамбул) - отзывы, фото и сравнение цен - Tripadvisor',
      },
      {
        key: 'TITLE',
        value:
          'SHERATON ISTANBUL CITY CENTER (Стамбул) - отзывы, фото и сравнение цен - Tripadvisor',
      },
      { key: 'MAIN_H1', value: 'Sheraton Istanbul City Center' },
      { key: 'IS_INDEXABLE', value: 'true' },
    ],
    schedule: null,
    media: [
      {
        tripMediaCount: 813,
        media: [
          {
            idTrip: 423175630,
            caption: 'Hotel Entrance',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/39/25/ce/hotel-entrance.jpg',
            },
          },
          {
            idTrip: 775793539,
            caption: 'Entrance',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/3d/ab/83/entrance.jpg',
            },
          },
          {
            idTrip: 677320491,
            caption: 'Graffitication Bar',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/28/5f/17/2b/graffitication-bar.jpg',
            },
          },
          {
            idTrip: 677320488,
            caption: 'İzmir Meeting Room',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/28/5f/17/28/izmir-meeting-room.jpg',
            },
          },
          {
            idTrip: 677320484,
            caption: 'Le Petite Chef',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/28/5f/17/24/le-petite-chef.jpg',
            },
          },
          {
            idTrip: 677320480,
            caption: 'Sheraton Club Lounge',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/28/5f/17/20/sheraton-club-lounge.jpg',
            },
          },
          {
            idTrip: 762436240,
            caption: 'Bodrum Meeting Room',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/90/bodrum-meeting-room.jpg',
            },
          },
          {
            idTrip: 762436241,
            caption: 'Ankara Meeting Room',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/91/ankara-meeting-room.jpg',
            },
          },
          {
            idTrip: 762436238,
            caption: 'Mardin Meeting Room - Classroom Setup',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/8e/mardin-meeting-room-classroom.jpg',
            },
          },
          {
            idTrip: 762436233,
            caption: 'Izmir Meeting Room â€“ Classroom Setup',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/89/izmir-meeting-room-a.jpg',
            },
          },
          {
            idTrip: 762436234,
            caption: 'Istanbul Grand Ballroom - Classroom Setup',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/8a/istanbul-grand-ballroom.jpg',
            },
          },
          {
            idTrip: 762436235,
            caption: 'Bursa Meeting Room',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/8b/bursa-meeting-room.jpg',
            },
          },
          {
            idTrip: 762436236,
            caption: 'Istanbul Grand Ballroom- Separated',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/8c/istanbul-grand-ballroom.jpg',
            },
          },
          {
            idTrip: 762436237,
            caption: 'Mardin Meeting Room â€“ Cabaret Setup',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/8d/mardin-meeting-room-a.jpg',
            },
          },
          {
            idTrip: 762436229,
            caption: 'Izmir Meeting Room - Theater Setup',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/85/izmir-meeting-room-theater.jpg',
            },
          },
          {
            idTrip: 762436231,
            caption: 'Bar',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/87/bar.jpg',
            },
          },
          {
            idTrip: 762436232,
            caption: 'Izmir Meeting Room - U Shape',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/71/da/88/izmir-meeting-room-u.jpg',
            },
          },
          {
            idTrip: 758405868,
            caption: 'Executive Suite - Dining Room 2',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/34/5a/ec/executive-suite-dining.jpg',
            },
          },
          {
            idTrip: 758405867,
            caption: 'Junior Suit - Bathroom',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/34/5a/eb/junior-suit-bathroom.jpg',
            },
          },
          {
            idTrip: 758405857,
            caption: 'Junior Suit e- Living Room',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/34/5a/e1/junior-suit-e-living.jpg',
            },
          },
          {
            idTrip: 758405859,
            caption: 'Executive Suit - Dining Room 1',
            image: {
              width: 1280,
              height: 853,
              url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/34/5a/e3/executive-suit-dining.jpg',
            },
          },
        ],
      },
    ],
    translateData: [
      { key: 'title', value: [] },
      {
        key: 'streetAddress',
        value: [
          {
            locale: 'es_MX',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'fr_BE',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turquie',
          },
          {
            locale: 'es_VE',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'zh_TW',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, 伊斯坦堡 土耳其',
          },
          {
            locale: 'zh_HK',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, 伊斯坦堡 土耳其',
          },
          {
            locale: 'it',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turchia',
          },
          {
            locale: 'ko',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, 이스탄불 터키',
          },
          {
            locale: 'es_CL',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'fi',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turkki',
          },
          {
            locale: 'pt_PT',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istambul 34440 Turquia',
          },
          {
            locale: 'en_US',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'th',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, อิสตันบูล 34440 ตุรกี',
          },
          {
            locale: 'en_SG',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'en_UK',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'pt',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istambul 34440 Turquia',
          },
          {
            locale: 'ar',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, إسطنبول 34440 تركيا',
          },
          {
            locale: 'ru',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Стамбул 34440 Турция',
          },
          {
            locale: 'en_NZ',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'de_CH',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkei',
          },
          {
            locale: 'sk',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turecko',
          },
          {
            locale: 'en_ZA',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'cs',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turecko',
          },
          {
            locale: 'sv',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turkiet',
          },
          {
            locale: 'el',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Κωνσταντινούπολη 34440 Τουρκία',
          },
          {
            locale: 'de_AT',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkei',
          },
          {
            locale: 'hu',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Isztambul 34440 Törökország',
          },
          {
            locale: 'nl',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turkije',
          },
          {
            locale: 'fr_CH',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turquie',
          },
          {
            locale: 'en_AU',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'in',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turki',
          },
          {
            locale: 'vi',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Thổ Nhĩ Kỳ',
          },
          {
            locale: 'fr_CA',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turquie',
          },
          {
            locale: 'es_AR',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'ar_EG',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, إسطنبول 34440 تركيا',
          },
          {
            locale: 'en_MY',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'sr',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turska',
          },
          {
            locale: 'it_CH',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turchia',
          },
          {
            locale: 'da',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Tyrkiet',
          },
          {
            locale: 'es',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'tr',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, İstanbul 34440 Türkiye',
          },
          {
            locale: 'en_HK',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'en_IE',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'en_CA',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'no',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Tyrkia',
          },
          {
            locale: 'nl_BE',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turkije',
          },
          {
            locale: 'pl',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Stambuł 34440 Turcja',
          },
          {
            locale: 'zh_CN',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, 伊斯坦布尔 土耳其',
          },
          {
            locale: 'es_CO',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'fr',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Turquie',
          },
          {
            locale: 'ja',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, イスタンブール トルコ',
          },
          {
            locale: 'iw',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, איסטנבול 34440 טורקיה',
          },
          {
            locale: 'de',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkei',
          },
          {
            locale: 'en_IN',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
          {
            locale: 'zh',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, 伊斯坦布尔 土耳其',
          },
          {
            locale: 'es_PE',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Estambul 34440 Turquía',
          },
          {
            locale: 'en_PH',
            fullAddress:
              'Kurtulus Deresi Cad. No 23 Haci Ahmet Mah, Istanbul 34440 Türkiye',
          },
        ],
      },
    ],
  },
  message: { title: 'url func all ok', error: [] },
};
const activities1 = {
  data: {
    // tripId: 294555,
    // title: 'Цистерна Базилика',
    // description: null,
    // rating: { count: 32347, rate: '4.5', additional: null },
    // placeType: 'ATTRACTION',
    // category: null,
    // price: null,
    // contacts: { phoneNumber: null, email: null },
    // tags: [
    //   {
    //     key: 'category_activities',
    //     value: [
    //       {
    //         tagKey: 'Ancient_Ruins',
    //         title: 'Исторические достопримечательности',
    //         idTripCategory: null,
    //         tagIcon: null,
    //         secondaryValue: null,
    //         visibleTrip: null,
    //       },
    //       {
    //         tagKey: 'Architectural_Buildings',
    //         title: 'Древние руины',
    //         idTripCategory: null,
    //         tagIcon: null,
    //         secondaryValue: null,
    //         visibleTrip: null,
    //       },
    //       {
    //         tagKey: 'Historic_Sites',
    //         title: 'Архитектурные достопримечательности',
    //         idTripCategory: null,
    //         tagIcon: null,
    //         secondaryValue: null,
    //         visibleTrip: null,
    //       },
    //     ],
    //   },
    // ],
    // location: {
    //   countryIso: null,
    //   addressString:
    //     'Alemdar Mahallesi, Yerebatan Caddesi, No:1/3, Стамбул 34410 Турция',
    //   address: {
    //     city: 'Стамбул',
    //     state: null,
    //     postalCode: '34410',
    //     street1: null,
    //     street2: null,
    //   },
    //   parentArea: [
    //     { locationId: null, placeType: 'CITY', title: 'Стамбул' },
    //     { locationId: null, placeType: 'COUNTRY', title: 'Турция' },
    //   ],
    //   coord: { latitude: 41.00876, longitude: 28.978268 },
    //   neighborhoods: null,
    // },
    // tripBreadcrumb: [
    //   {
    //     text: 'Европа',
    //     url: '/Tourism-g4-Europe-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Турция',
    //     url: '/Tourism-g293969-Turkiye-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Стамбул',
    //     url: '/Tourism-g293974-Istanbul-Vacations.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    //   {
    //     text: null,
    //     url: '/Attractions-g293974-Activities-Istanbul.html',
    //     localizedText: 'Развлечения в Стамбуле',
    //     obfuscated: false,
    //   },
    //   {
    //     text: 'Цистерна Базилика',
    //     url: '/Attraction_Review-g293974-d294555-Reviews-Basilica_Cistern-Istanbul.html',
    //     localizedText: null,
    //     obfuscated: false,
    //   },
    // ],
    // additional: null,
    // seoTrip: [
    //   { key: 'META_DESCRIPTION', value: '' },
    //   { key: 'MASTHEAD_H1', value: 'Цистерна Базилика, Стамбул: отзывы' },
    //   {
    //     key: 'TITLE',
    //     value:
    //       'Цистерна Базилика, Стамбул: лучшие советы перед посещением - Tripadvisor',
    //   },
    //   { key: 'MAIN_H1', value: 'Цистерна Базилика' },
    //   { key: 'IS_INDEXABLE', value: 'true' },
    // ],
    schedule: [
      { day: 'Понедельник', time: ['9:00 - 18:30'] },
      { day: 'Вторник', time: ['9:00 - 18:30'] },
      { day: 'Среда', time: ['9:00 - 18:30'] },
      { day: 'Четверг', time: ['9:00 - 18:30'] },
      { day: 'Пятница', time: ['9:00 - 18:30'] },
      { day: 'Суббота', time: ['9:00 - 18:30'] },
      { day: 'Воскресенье', time: ['9:00 - 18:30'] },
    ],
    // media: [
    //   {
    //     tripMediaCount: 16794,
    //     media: [
    //       {
    //         idTrip: 205139165,
    //         caption: null,
    //         image: {
    //           width: 1280,
    //           height: 800,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/0c/3a/2c/dd/istanbul-36h-basilica.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 756659216,
    //         caption: 'Happy tourist 😍',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2d/19/b4/10/happy-tourist.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792470944,
    //         caption: '😀',
    //         image: {
    //           width: 960,
    //           height: 1280,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/2f/3c/25/a0/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792470898,
    //         caption: '😀',
    //         image: {
    //           width: 960,
    //           height: 1280,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-o/2f/3c/25/72/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293480,
    //         caption: '',
    //         image: {
    //           width: 1280,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2f/39/70/68/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293479,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/67/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293478,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/66/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293477,
    //         caption: '',
    //         image: {
    //           width: 1280,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2f/39/70/65/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293476,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/64/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293421,
    //         caption: '',
    //         image: {
    //           width: 1280,
    //           height: 960,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2f/39/70/2d/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293420,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/2c/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293419,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/2b/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293418,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/2a/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 792293417,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/39/70/29/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 790046382,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/17/26/ae/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 790046381,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/17/26/ad/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 790046380,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/17/26/ac/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 790046379,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/17/26/ab/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 790046378,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/17/26/aa/caption.jpg',
    //         },
    //       },
    //       {
    //         idTrip: 790046377,
    //         caption: '',
    //         image: {
    //           width: 1024,
    //           height: 1365,
    //           url: 'https://media-cdn.tripadvisor.com/media/photo-w/2f/17/26/a9/caption.jpg',
    //         },
    //       },
    //     ],
    //   },
    // ],
  },
  message: { title: 'url func all ok', error: [] },
};
const activities2 = {
  data: {
    tripId: 15024227,
    title: 'Han Yeraltı Sehri',
    description: null,
    rating: { count: 2, rate: '3.5', additional: null },
    placeType: 'ATTRACTION',
    category: null,
    price: null,
    contacts: { phoneNumber: null, email: null },
    tags: [
      {
        key: 'category_activities',
        value: [
          {
            tagKey: 'Architectural_Buildings',
            title: 'Архитектурные достопримечательности',
            idTripCategory: null,
            tagIcon: null,
            secondaryValue: null,
            visibleTrip: null,
          },
          {
            tagKey: 'Ghost_Towns',
            title: 'Загадочные места',
            idTripCategory: null,
            tagIcon: null,
            secondaryValue: null,
            visibleTrip: null,
          },
          {
            tagKey: 'Mysterious_Sites',
            title: 'Города-призраки',
            idTripCategory: null,
            tagIcon: null,
            secondaryValue: null,
            visibleTrip: null,
          },
        ],
      },
    ],
    location: {
      countryIso: null,
      addressString: null,
      address: {
        city: 'Эскишехир',
        state: null,
        postalCode: '26710',
        street1: null,
        street2: null,
      },
      parentArea: [
        { locationId: null, placeType: 'CITY', title: 'Эскишехир' },
        { locationId: null, placeType: 'COUNTRY', title: 'Турция' },
      ],
      coord: { latitude: null, longitude: null },
      neighborhoods: null,
    },
    tripBreadcrumb: [
      {
        text: 'Европа',
        url: '/Tourism-g4-Europe-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: 'Турция',
        url: '/Tourism-g293969-Turkiye-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: 'Провинция Эскишехир',
        url: '/Tourism-g319805-Eskisehir_Province-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: 'Эскишехир',
        url: '/Tourism-g319806-Eskisehir_Eskisehir_Province-Vacations.html',
        localizedText: null,
        obfuscated: false,
      },
      {
        text: null,
        url: '/Attractions-g319806-Activities-Eskisehir_Eskisehir_Province.html',
        localizedText: 'Развлечения в Эскишехир',
        obfuscated: false,
      },
      {
        text: 'Han Yeraltı Sehri',
        url: '/Attraction_Review-g319806-d15024227-Reviews-Han_YeraltI_Sehri-Eskisehir_Eskisehir_Province.html',
        localizedText: null,
        obfuscated: false,
      },
    ],
    additional: null,
    seoTrip: [
      { key: 'META_DESCRIPTION', value: '' },
      { key: 'MASTHEAD_H1', value: 'Han Yeraltı Sehri, Эскишехир: отзывы' },
      {
        key: 'TITLE',
        value:
          'Han Yeraltı Sehri, Эскишехир: лучшие советы перед посещением - Tripadvisor',
      },
      { key: 'MAIN_H1', value: 'Han Yeraltı Sehri' },
      { key: 'IS_INDEXABLE', value: 'true' },
    ],
    media: [
      {
        tripMediaCount: 16,
        media: [
          {
            idTrip: 379756217,
            caption: null,
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9e/b9/han-yeralti-sehri.jpg',
            },
          },
          {
            idTrip: 379756217,
            caption: 'Han, Yeraltı şehri',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9e/b9/han-yeralti-sehri.jpg',
            },
          },
          {
            idTrip: 379756150,
            caption: 'Han, Yeraltı şehrinde rehberler',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9e/76/han-yeralti-sehrinde.jpg',
            },
          },
          {
            idTrip: 379756131,
            caption: 'Han, Yeraltı şehri rehberlerimiz',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9e/63/han-yeralti-sehri-rehberlerimi.jpg',
            },
          },
          {
            idTrip: 379756077,
            caption: 'Han, Yeraltı şehri',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9e/2d/han-yeralti-sehri.jpg',
            },
          },
          {
            idTrip: 379756058,
            caption: 'Han, Yeraltı şehrinde duvarlar',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9e/1a/han-yeralti-sehrinde.jpg',
            },
          },
          {
            idTrip: 379756023,
            caption: 'Han, Yeraltı şehri',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9d/f7/han-yeralti-sehri.jpg',
            },
          },
          {
            idTrip: 379755970,
            caption: 'Han, Yeraltı şehrinde mezar',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9d/c2/han-yeralti-sehrinde.jpg',
            },
          },
          {
            idTrip: 379755923,
            caption: 'Han, Yeraltı şehrinde odalar',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9d/93/han-yeralti-sehrinde.jpg',
            },
          },
          {
            idTrip: 379755885,
            caption: 'Han, Yeraltı şehrinde gizemli odalar',
            image: {
              width: 768,
              height: 1024,
              url: 'https://media-cdn.tripadvisor.com/media/photo-o/16/a2/9d/6d/han-yeralti-sehrinde.jpg',
            },
          },
          {
            idTrip: 379755865,
            caption: 'Han, Yeraltı şehrinde geçiş',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9d/59/han-yeralti-sehrinde.jpg',
            },
          },
          {
            idTrip: 379755827,
            caption: 'Han, Yeraltı şehri üstü',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9d/33/han-yeralti-sehri-ustu.jpg',
            },
          },
          {
            idTrip: 379755770,
            caption: 'Han, Yeraltı şehri kapıları',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9c/fa/han-yeralti-sehri-kapilari.jpg',
            },
          },
          {
            idTrip: 379755729,
            caption: 'Han, Yeraltı şehri',
            image: {
              width: 768,
              height: 1024,
              url: 'https://media-cdn.tripadvisor.com/media/photo-o/16/a2/9c/d1/han-yeralti-sehri.jpg',
            },
          },
          {
            idTrip: 379755691,
            caption: 'Han, Yeraltı şehri',
            image: {
              width: 768,
              height: 1024,
              url: 'https://media-cdn.tripadvisor.com/media/photo-o/16/a2/9c/ab/han-yeralti-sehri.jpg',
            },
          },
          {
            idTrip: 379755654,
            caption: 'Han, Yeraltı şehrinde oda',
            image: {
              width: 1024,
              height: 768,
              url: 'https://media-cdn.tripadvisor.com/media/photo-w/16/a2/9c/86/han-yeralti-sehrinde.jpg',
            },
          },
        ],
      },
    ],
  },
  message: { title: 'url func all ok', error: [] },
};

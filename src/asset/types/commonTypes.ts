// export interface IRateInBd {
//   codename: string;
//   buyrate: string;
//   buyiso: string;
//   quantity: number;
//   name: string | null;
//   selrate: string;
//   seliso: string;
//   type: string;
//   address: string;
//   coord: string;
// }

export interface IMessageStatus {
  title: string;
  error: any;
}

export interface ICountryTrip {
  id: number;
  hrefName: string;
  href: string;
  country: string;
}
export interface ITownTrip {
  id: number;
  hrefName: string;
  href: string;
  town: string;
  country: string;
  parent: string;
}
export interface IUrlObjectData {
  id: number;
  name: string;
  type: string;
  url: string;
  parent: string;
  town?: string;
}
export interface IUrlsObjects {
  country: ICountryTrip;
  data: IUrlObjectData[];
}
export interface IUrlsObjectsWithTowns {
  country: ICountryTrip;
  towns: ITownTrip[];
  data: IUrlObjectData[];
}
// export interface IResponseAxios {
//   data: IRateInBd[] | void;
//   message: IMessageStatus;
// }
export interface IErrorRecursion {
  url?: string;
  cookie?: number;
  country?: ICountryTrip;
  town?: ITownTrip;
  error?: ITownTrip | any;
  object?: ITownTrip | any;
}
export interface IUrlObject {
  country: ICountryTrip;
  data: IUrlObjectData[];
}

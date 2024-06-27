export type ResponseDataType = {
  altSpellings: string[];
  area: number;
  border: string[];
  capital: string;
  capitalInfo: { [key: string]: number[] }; //lating : number[]
  car: { [key: string]: string[] | string }; // car:{model : "Toyota", colors:["red","blue"]}
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: { [key: string]: string };
  continents: string[];
  currencies: { [key: string]: { [key: string]: string } };
  demonyms: { [key: string]: { [key: string]: string } };
  fifa: string;
  flag: string;
  flags: { alt?: string; png: string; svg: string };
  gini: { [key: string]: number };
  idd: { [key: string]: string | string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  latlng: number[];
  maps: { [key: string]: string };
  name: {
    common: string;
    nativeName: { eng: { common: string; official: string } };
    official: string;
  };

  population: number;
  postalCode: { [key: string]: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: { [key: string]: { [key: string]: string } };
  unMember: boolean;
};

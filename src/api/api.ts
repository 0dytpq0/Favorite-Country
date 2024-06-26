import axios, { AxiosInstance } from "axios";
import CountryAPI from "./country";

const BASE_URL: string = "https://restcountries.com/v3.1";

class Api {
  private axios: AxiosInstance;

  country;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });
    this.country = new CountryAPI(this.axios);
  }
}

const api = new Api();

export default api;

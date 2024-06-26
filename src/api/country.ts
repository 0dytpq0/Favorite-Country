import { AxiosInstance } from "axios";

type ResponseDataType = {
  name: {
    common: string;
  };
  flags: { png: string };
  capital: string;
  population: number;
};

class CountryAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCountriesInfo() {
    const path = "/all";

    const response = await this.axios.get<ResponseDataType[]>(path);

    const data = response.data.sort((a, b) => b.population - a.population);

    return data;
  }
}

export default CountryAPI;

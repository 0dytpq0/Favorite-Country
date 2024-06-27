import { AxiosInstance } from "axios";
import { ResponseDataType } from "../Types";

// 보여주려는 데이터가 데이터만 오는 api가 있음 ->
// 예를 들어 사전 api -> 이전페이지, 다음페이지에 대한 정보가 존재하는 지에 대한 정보 -> 응답값이 복잡해지기에 response에 대한 타입을 만들고 사전에 대한 타입도 따로 정해주는 것이

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

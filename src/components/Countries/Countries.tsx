import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { ResponseDataType } from "../../Types";
import api from "../../api/api";
import useCountryStore from "../../zustand/store";
import CardList from "../CardList";

function Countries() {
  const { setTotalCountries } = useCountryStore();

  const { data: countries = [], isSuccess = false } = useQuery<
    ResponseDataType[],
    AxiosError
  >({
    queryKey: ["countries"],
    queryFn: () => api.country.getCountriesInfo(),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    setTotalCountries(countries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div>
      <div className="container flex flex-col items-center p-6 mx-auto gap-y-4">
        <h3 className="text-2xl font-semibold">Favorite Countries</h3>
        <CardList isSelected={true} />
      </div>
      <div className="container flex flex-col items-center p-6 mx-auto gap-y-4">
        <h3 className="text-4xl font-semibold">Countries</h3>
        <CardList isSelected={false} />
      </div>
    </div>
  );
}

export default Countries;

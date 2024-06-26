import { useCallback, useEffect, useState } from "react";
import api from "../../api/api";
import CardList from "../CardList";

type CountriesInfoType = {
  name: {
    common: string;
  };
  flags: { png: string };
  capital: string;
  population: number;
};

function Countries() {
  const [countriesInfo, setCountriesInfo] = useState<CountriesInfoType[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<CountriesInfoType[]>([]);

  useEffect(() => {
    const getCountriesInfo = async () => {
      const countries = await api.country.getCountriesInfo();
      setCountriesInfo(countries);
    };

    getCountriesInfo();
  }, []);

  const handleClickCard: (countries: CountriesInfoType[], name: string, isSelected: boolean) => void = useCallback(
    (countries, name, isSelected) => {
      const updatedSelectedCountries: CountriesInfoType[] = [];
      const updatedCountriesInfo: CountriesInfoType[] = [];

      countries.forEach((country) => {
        if (country.name.common === name) {
          updatedSelectedCountries.push(country);
        } else {
          updatedCountriesInfo.push(country);
        }
      });

      if (isSelected) {
        setCountriesInfo((prevCountries) => prevCountries.concat(updatedSelectedCountries).sort((a, b) => b.population - a.population));
        setSelectedCountries(updatedCountriesInfo);
      } else {
        setSelectedCountries((prevSelected) => prevSelected.concat(updatedSelectedCountries));
        setCountriesInfo(updatedCountriesInfo);
      }
    },
    []
  );

  return (
    <div>
      <div className="container flex flex-col items-center p-6 mx-auto gap-y-4">
        <h3 className="text-2xl font-semibold">Favorite Countries</h3>
        <CardList onClickFn={handleClickCard} countries={selectedCountries} isSelected={true} />
      </div>
      <div className="container flex flex-col items-center p-6 mx-auto gap-y-4">
        <h3 className="text-4xl font-semibold">Countries</h3>
        <CardList onClickFn={handleClickCard} countries={countriesInfo} isSelected={false} />
      </div>
    </div>
  );
}

export default Countries;

import { create } from "zustand";

type CountriesType = {
  name: {
    common: string;
  };
  flags: { png: string };
  capital: string;
  population: number;
};

type CountryState = {
  totalCountries: CountriesType[];
  selectedCountries: CountriesType[];
  setTotalCountries: (countries: CountriesType[]) => void;
  setSelectedCountries: (countries: CountriesType[]) => void;
  handleClickCard: (countries: CountriesType[], name: string, isSelected: boolean) => void;
};

const useCountryStore = create<CountryState>((set) => ({
  totalCountries: [],
  selectedCountries: [],
  setTotalCountries: (countries: CountriesType[]) => set({ totalCountries: countries }),
  setSelectedCountries: (countries: CountriesType[]) => set({ selectedCountries: countries }),
  handleClickCard: (countries, name, isSelected) => {
    const updatedSelectedCountries: CountriesType[] = [];
    const updatedCountries: CountriesType[] = [];

    countries.forEach((country) => {
      if (country.name.common === name) {
        updatedSelectedCountries.push(country);
      } else {
        updatedCountries.push(country);
      }
    });

    set((state) => {
      if (isSelected) {
        return {
          totalCountries: state.totalCountries.concat(updatedSelectedCountries).sort((a, b) => b.population - a.population),
          selectedCountries: updatedCountries,
        };
      } else {
        return {
          totalCountries: updatedCountries,
          selectedCountries: state.selectedCountries.concat(updatedSelectedCountries),
        };
      }
    });
  },
}));

export default useCountryStore;

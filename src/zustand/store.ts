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
  windowSize: string;
  totalCountries: CountriesType[];
  selectedCountries: CountriesType[];
  setWindowSize: (size: string) => void;
  setTotalCountries: (countries: CountriesType[]) => void;
  setSelectedCountries: (countries: CountriesType[]) => void;
  handleClickCard: (
    countries: CountriesType[],
    name: string,
    isSelected: boolean
  ) => void;
};

const useCountryStore = create<CountryState>((set) => ({
  windowSize: "",
  totalCountries: [],
  selectedCountries: [],
  setWindowSize: (size: string) => set({ windowSize: size }),
  setTotalCountries: (countries: CountriesType[]) =>
    set({ totalCountries: countries }),
  setSelectedCountries: (countries: CountriesType[]) =>
    set({ selectedCountries: countries }),
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
          totalCountries: state.totalCountries
            .concat(updatedSelectedCountries)
            .sort((a, b) => b.population - a.population),
          selectedCountries: updatedCountries,
        };
      } else {
        return {
          totalCountries: updatedCountries,
          selectedCountries: state.selectedCountries.concat(
            updatedSelectedCountries
          ),
        };
      }
    });
  },
}));

export default useCountryStore;

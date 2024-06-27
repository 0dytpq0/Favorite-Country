import { create } from "zustand";
import { ResponseDataType } from "../Types";

type CountryState = {
  windowSize: string;
  totalCountries: ResponseDataType[];
  selectedCountries: ResponseDataType[];
  setWindowSize: (size: string) => void;
  setTotalCountries: (countries: ResponseDataType[]) => void;
  setSelectedCountries: (countries: ResponseDataType[]) => void;
  handleClickCard: (
    countries: ResponseDataType[],
    name: string,
    isSelected: boolean
  ) => void;
};

const useCountryStore = create<CountryState>((set) => ({
  windowSize: "",
  totalCountries: [],
  selectedCountries: [],
  setWindowSize: (size: string) => set({ windowSize: size }),
  setTotalCountries: (countries: ResponseDataType[]) =>
    set({ totalCountries: countries }),
  setSelectedCountries: (countries: ResponseDataType[]) =>
    set({ selectedCountries: countries }),
  handleClickCard: (countries, name, isSelected) => {
    const updatedSelectedCountries: ResponseDataType[] = [];
    const updatedCountries: ResponseDataType[] = [];

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

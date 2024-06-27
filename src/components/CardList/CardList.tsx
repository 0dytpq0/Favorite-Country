import useCountryStore from "../../zustand/store";
import Card from "../Card/Card";

interface CardListProps {
  isSelected: boolean;
}

function CardList({ isSelected }: CardListProps) {
  const { totalCountries, selectedCountries, handleClickCard } = useCountryStore();
  const countries = isSelected ? selectedCountries : totalCountries;
  const paintCards = (isSelected: boolean) => {
    return countries?.map((country) => {
      return (
        <Card
          onClickFn={() => handleClickCard(countries, country?.name.common, isSelected)}
          isSelected={isSelected}
          flag={country?.flags.png}
          name={country?.name.common}
          capital={country?.capital}
        />
      );
    });
  };

  return <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">{paintCards(isSelected)}</div>;
}

export default CardList;

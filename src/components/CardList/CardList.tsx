import useResize from "../../hooks/useResize";
import useCountryStore from "../../zustand/store";
import Card from "../Card/Card";

interface CardListProps {
  isSelected: boolean;
}

function CardList({ isSelected }: CardListProps) {
  const { totalCountries, selectedCountries, handleClickCard } =
    useCountryStore();
  const { size } = useResize(1000);

  const countries = isSelected ? selectedCountries : totalCountries;

  const paintCards = (isSelected: boolean) => {
    return countries?.map((country) => {
      return (
        <Card
          key={country.name.common}
          onClickFn={() =>
            handleClickCard(countries, country?.name.common, isSelected)
          }
          variant={isSelected ? "outline" : "contained"}
          size={size}
          intent={isSelected ? "clicked" : "primary"}
          flag={country?.flags.png}
          name={country?.name.common}
          capital={country?.capital}
        />
      );
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {paintCards(isSelected)}
    </div>
  );
}

export default CardList;

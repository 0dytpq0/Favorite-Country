import Card from "../Card/Card";
type CountriesInfoType = {
  name: {
    common: string;
  };
  flags: { png: string };
  capital: string;
  population: number;
};

interface CardListProps {
  onClickFn: (countries: CountriesInfoType[], name: string, isSelected: boolean) => void;
  countries: CountriesInfoType[];
  isSelected: boolean;
}

function CardList({ onClickFn: handleClickCard, countries, isSelected }: CardListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {countries?.map((country) => {
        return (
          <Card
            onClickFn={handleClickCard}
            isSelected={isSelected}
            countries={countries}
            flag={country?.flags.png}
            name={country?.name.common}
            capital={country?.capital}
          />
        );
      })}
    </div>
  );
}

export default CardList;

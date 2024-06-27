interface CardProps {
  name: string;
  capital: string;
  flag: string;
  isSelected: boolean;
  onClickFn: () => void;
}

function Card({
  name,
  capital,
  flag,
  onClickFn: handleCardClick,
  isSelected,
}: CardProps) {
  return (
    <div
      className={`flex flex-col items-start justify-center h-40 p-4 bg-white border ${
        isSelected === true ? "border-green-500" : ""
      } rounded-lg shadow-md lg:w-80 md:w-60 hover:shadow-lg`}
      onClick={handleCardClick}
    >
      <div className="flex items-center justify-center w-full h-1/2">
        <img className="w-20 h-auto mb-4" src={flag} />
      </div>
      <h1 className="mb-2 text-xl font-semibold">{name}</h1>
      <p className="text-gray-600">{capital}</p>
    </div>
  );
}

export default Card;

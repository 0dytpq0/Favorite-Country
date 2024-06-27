import { VariantProps, cva } from "class-variance-authority";

type CardProps = {
  name: string;
  capital: string;
  flag: string;
  onClickFn: React.MouseEventHandler<HTMLDivElement>;
} & CardVariantType;

const cardVariant = cva(
  "flex flex-col items-start justify-center h-52 border rounded-lg shadow-md hover:shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:opacity-50 duration-300 ",
  {
    variants: {
      intent: {
        primary: "bg-white ",
        clicked: "bg-black  ",
      },
      size: {
        sm: "p-3 w-40",
        md: "p-4 w-50",
        lg: "p-5 w-60",
      },
      variant: {
        outline: "border-rose-900",
        contained: "",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "text-gray-600",
      },
      {
        intent: "clicked",
        variant: "outline",
        className: " text-white ",
      },
    ],

    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  }
);

type CardVariantType = VariantProps<typeof cardVariant>;

function Card({
  name,
  capital,
  flag,
  onClickFn: handleCardClick,
  variant,
  size,
  intent,
}: CardProps) {
  return (
    <div
      className={cardVariant({ intent, size, variant })}
      onClick={handleCardClick}
    >
      <div className="relative flex items-center justify-center w-full h-1/2">
        <img className="w-20 h-auto mb-4 aspect-auto" src={flag} />
      </div>
      <h1 className="mb-2 text-xl font-semibold">{name}</h1>
      <p>{capital}</p>
    </div>
  );
}

export default Card;

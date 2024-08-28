interface BoxProps {
  Max: number;
  charLenght: number;
  name: string;
}

const Box = ({ Max, charLenght, name }: BoxProps) => {
  const ifLimitReached = charLenght >= Max;
  return (
    <div className="flex flex-grow flex-col items-center gap-y-2 border border-black dark:border-white">
      <h3 className="text-xl font-light">{name}</h3>
      <span
        className={`text-lg font-bold ${ifLimitReached ? "text-red-500" : ""}`}
      >
        {charLenght} / {Max}
      </span>
    </div>
  );
};

export default Box;

import Box from "./Box";

interface infoCountProps {
  countLenghts: Array<{ name: string; limit: number }>;
  charLenght: number;
}

const InfoCount = ({ countLenghts, charLenght }: infoCountProps) => {
  return (
    <div className="flex py-4">
      {countLenghts.map((c, i) => (
        <Box key={i} Max={c.limit} name={c.name} charLenght={charLenght} />
      ))}
    </div>
  );
};

export default InfoCount;

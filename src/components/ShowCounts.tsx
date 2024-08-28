interface ShowCountsProps {
  characters: number;
  words: number;
  paragraphs: number;
}

const ShowCounts = ({ characters, words, paragraphs }: ShowCountsProps) => {
  const counts = [
    { name: "Characters", count: characters },
    { name: "Words", count: words },
    { name: "Paragraph", count: paragraphs },
  ];
  return (
    <div className="flex">
      {counts.map((c, i) => (
        <div
          key={i}
          className="flex flex-grow flex-col items-center border border-black p-2 dark:border-white"
        >
          <h3 className="font-light uppercase">{c.name}</h3>
          <span>{c.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ShowCounts;

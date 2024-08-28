import { useEffect, useState } from "react";
import ShowCounts from "./components/ShowCounts";
import InfoCount from "./components/InfoCount";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [text, setText] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  const countCharacters = text.length;
  const countWords = text.split(" ").filter((t) => t.trim() !== "").length;
  const countParagraphs = text
    .split(/\n/)
    .filter((t) => t.trim() !== "").length;

  const Socials = [
    { name: "Facebook", limit: 63206 },
    { name: "Instagram", limit: 2200 },
    { name: "X/Twitter", limit: 280 },
  ];

  const MetaTags = [
    { name: "Meta Title", limit: 60 },
    { name: "Meta Description", limit: 160 },
  ];

  return (
    <div className="container min-h-screen py-2 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto border border-black p-3 md:w-3/4 md:p-4 dark:border-white">
        <div className="flex flex-col items-center justify-between pb-3 md:flex-row">
          <h1 className="py-4 text-2xl font-extrabold uppercase md:text-4xl">
            word counter
          </h1>{" "}
          <ToggleButton isOn={theme === "dark"} onToggle={handleTheme} />
        </div>
        <ShowCounts
          characters={countCharacters}
          words={countWords}
          paragraphs={countParagraphs}
        />
        <form>
          <textarea
            className="w-full border-x border-b border-black p-2 text-white focus:outline-none dark:border-white dark:bg-slate-800"
            rows={10}
            onChange={(e) => handleChange(e)}
            value={text}
            spellCheck={true}
            placeholder="Type Here"
          ></textarea>
        </form>
        <InfoCount countLenghts={Socials} charLenght={countCharacters} />
        <InfoCount countLenghts={MetaTags} charLenght={countCharacters} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

export default function Line({ winIndex, winner }) {
  const [line, setLine] = useState("hidden");

  useEffect(() => {
    createLine();
  }, [winner]);

  const createLine = () => {
    if (winner !== "") {
      let winString = "";
      winIndex.forEach((element) => {
        winString += element;
      });

      switch (winString) {
        case "012":
          setLine("-translate-y-24 md:-translate-y-32");
          break;

        case "345":
          setLine("");
          break;

        case "678":
          setLine("translate-y-24 md:translate-y-32");
          break;

        case "036":
          setLine("rotate-90 -translate-x-24 md:-translate-x-32");
          break;

        case "147":
          setLine("rotate-90");
          break;

        case "258":
          setLine("rotate-90 translate-x-24 md:translate-x-32");
          break;

        case "048":
          setLine("rotate-45");
          break;

        case "246":
          setLine("-rotate-45");
          break;

        default:
          break;
      }
    }
    else setLine("hidden");
  };

  return (
    <div
      className={`line w-80 md:w-96 h-1 absolute rounded-full ${line}`}
    ></div>
  );
}
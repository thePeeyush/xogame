import Box from "@/components/box"; // Importing the Box component
import Drawbox from "@/components/draw";
import Line from "@/components/line";
import Winnerbox from "@/components/winner";
import { useEffect, useState } from "react"; // Importing the useState hook
import { TbReload } from "react-icons/tb"; // Importing the TbReload icon from react-icons

export default function Game() {
  const [gamearray, setGamearray] = useState(Array(9).fill("")); // State for the game array
  const [turnX, setTurnX] = useState(false); // State for tracking the turn (X or O)
  const [winner, setWinner] = useState(""); // State for tracking the winner
  const [isFull, setIsFull] = useState(false); // State for tracking if the game board is full
  const [winIndex, setWinIndex] = useState([]);

  const winningMatrix = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ]; // Matrix for winning combinations

  const calculateWinner = () => {
    let check = true; // Flag to check if there is a winner
    winningMatrix.forEach((element) => {
      const [a, b, c] = element;
      if (
        gamearray[a] !== "" &&
        gamearray[a] === gamearray[b] &&
        gamearray[b] === gamearray[c]
      ) {
        setWinner(gamearray[a]); // Set the winner
        setWinIndex(element);
        check = false; // There is a winner, so set the flag to false
      }
    });
    return check; // Return the flag
  };

  useEffect(()=>{
    calculateWinner();
    checkFull();
    }
  ,[gamearray])

  const checkFull = () => {
    let count = 0; // Counter for empty cells
    gamearray.forEach((element) => {
      if (element === "") {
        count += 1; // Increment the counter if cell is empty
      }
    });
    if (count === 0) {
      setIsFull(true); // If all cells are filled, set isFull to true
    }
  };

  const handleClick = (i) => {
    if (calculateWinner()) {
      if (gamearray[i] === "") {
        const newGameArray = [...gamearray];
        newGameArray[i] = turnX ? "x" : "o"; // Set the value of the clicked cell
        setGamearray(newGameArray); // Update the game array
        setTurnX(!turnX); // Toggle the turn
      }
    } 
  };


  const reload = () => {
    setGamearray(Array(9).fill(""));
    setTurnX(false);
    setWinner("");
    setIsFull(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-40">
        <div className="mx-auto flex flex-wrap w-72 h-72 md:w-96 md:h-96 bg-white border-2 rounded-md">
          {gamearray.map((element, index) => {
            return (
              <Box
                key={index}
                value={element}
                index={index}
                click={() => {
                  handleClick(index);
                }}
              />
            );
          })}
        </div>
        <Line winIndex={winIndex} winner={winner} />
        
      </div>

      <div className="flex justify-center items-center mt-20 mb-6">
        <div className=" text-4xl text-blue-900">
          <TbReload onClick={reload} />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full  items-center">
          <div>
            {winner !== "" || isFull ? (
              <div className=" winner bg-white bg-opacity-40 rounded-md backdrop-blur-md w-full">
                <Winnerbox winner={winner} />
                <Drawbox winner={winner} isFull={isFull} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
    </>
  );
}

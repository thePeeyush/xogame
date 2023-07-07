import { BsCircle } from "react-icons/bs"; // Importing the BsCircle icon from react-icons
import { RxCross1 } from "react-icons/rx"; // Importing the RxCross1 icon from react-icons
import { FaCrown } from "react-icons/fa"; // Importing the RxCross1 icon from react-icons
 
 
 export default function Winnerbox({winner}) {
    return(
        <div className="flex justify-center notify">
        {winner !== "" ? (
          <div className="flex  flex-col px-24 py-4 rounded-md justify-center items-center font-bold text-2xl">
            <FaCrown className="text-4xl text-yellow-400"/>
            {winner === "o" ? (
              <BsCircle className="text-3xl text-blue-600 m-2" />
            ) : (
              <RxCross1 className="text-3xl text-red-500 m-2" />

            )}
          </div>
        ) : (
          ""
        )}
      </div>
    )
 }
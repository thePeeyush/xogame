import postcss from "postcss";
import { BsCircle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

("use-client");

export default function Box({ value, click }) {
  return (
    <div
      className=" border-2 border-black p-4 w-1/3 h-1/3 rounded flex justify-center items-center cursor-pointer"
      onClick={click}
    >
      {value !== "" ? (
        value === "x" ? (
          <RxCross1 className="ox text-4xl text-red-500 md:text-5xl" />
        ) : (
          <BsCircle className="ox text-4xl text-blue-600 md:text-5xl" />
        )
      ) : (
        ""
      )}
    </div>
  );
}

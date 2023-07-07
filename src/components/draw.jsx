export default function Drawbox({winner,isFull}) {

    return(
        <div className="flex justify-center notify">
        {winner === "" && isFull ? (
            <div className=" p-4 text-center font-bold text-2xl">
                DRAW 😒
            </div>
        ):"" }

        </div>
    )
}
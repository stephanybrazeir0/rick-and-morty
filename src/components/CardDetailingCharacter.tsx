import { Link } from "react-router-dom";
import { DeitalingCharacter } from "../types/Character";

const CardDetailingCharacter = ({ data }: { data: DeitalingCharacter }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-sm shadow flex max-[500px]:flex-col flex-row gap-4">
      <img src={data.image} alt={data.name} className="rounded-sm" />
      <div>
        <h1 className="font-medium text-green-900 text-xl sm:text-3xl ">
          {data.name}
        </h1>

        <div className="mb-4 flex flex-wrap items-center gap-1">
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              data.status === "Alive"
                ? "bg-green-500"
                : data.status === "Dead"
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
          ></div>
          <span className="sm:text-lg text-gray-600">{data.status}</span>
        </div>

        <p className="sm:text-lg text-gray-600">{data.species}</p>
        <p className="sm:text-lg text-gray-600">{data.gender}</p>
        {data.origin.name !== "unknown" ? (
          <Link to={`/planet`} className="sm:text-lg text-gray-600 underline">
            {data.origin.name}
          </Link>
        ) : (
          <p className="sm:text-lg text-gray-600">Unkown</p>
        )}
      </div>
    </div>
  );
};

export default CardDetailingCharacter;

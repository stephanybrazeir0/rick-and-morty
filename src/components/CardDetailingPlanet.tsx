import { DetailingPlanet } from "../types/Planet";

const CardDetailingPlanet = ({ data }: { data: DetailingPlanet }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-sm shadow mb-5">
      <h1 className="font-medium text-green-900 text-xl sm:text-3xl ">
        {data.name}
      </h1>
      <p className="sm:text-lg text-gray-600">{data.type}</p>
      <p className="sm:text-lg text-gray-600">
        {data.dimension !== "unknown" ? data.dimension : "Unknown"}
      </p>
    </div>
  );
};

export default CardDetailingPlanet;

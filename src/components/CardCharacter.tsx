import { Link } from "react-router-dom";
import { Character } from "../types/Character";

const CardCharacter = ({ data }: { data: Character }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-sm shadow">
      <Link to={`/character/${data.id}`}>
        <img src={data.image} alt={data.name} className="rounded-sm mb-4" />
        <h1 className="font-medium text-gray-800">{data.name}</h1>
        <p className="text-sm text-gray-600">{data.species}</p>
      </Link>
    </div>
  );
};

export default CardCharacter;

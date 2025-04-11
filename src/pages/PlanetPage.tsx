import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import CardDetailingPlanet from "../components/CardDetailingPlanet";
import GetPlanet from "../queries/GetPlanet";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CharactersWithOrigin from "../queries/CharactersWithOrigin";
import { CharacterOrigin } from "../types/Character";
import CardCharacter from "../components/CardCharacter";

const PlanetPage = () => {
  const params = useParams();
  const {
    data: planetData,
    loading: planetLoading,
    error: planetError,
  } = useQuery(GetPlanet, {
    variables: { id: params.id },
  });

  const { data: charactersData, loading: charactersLoading } =
    useQuery(CharactersWithOrigin);

  const filteredCharacters =
    charactersData?.characters?.results?.filter(
      (char: CharacterOrigin) => char.origin?.id === params.id
    ) || [];

  return (
    <>
      <Navbar />
      <main className="centralized-container">
        {planetLoading ? (
          <Spinner />
        ) : planetError ? (
          <div>
            <p className="text-red-900 font-medium text-center p-2">
              Ocorreu um erro: {planetError.message}
            </p>
          </div>
        ) : (
          <div>
            <CardDetailingPlanet data={planetData.location} />
            <h2 className="font-medium text-green-900 text-xl sm:text-3xl mb-8">
              Personagens com origem nesse planeta:
            </h2>
            {charactersLoading ? (
              <Spinner />
            ) : filteredCharacters.length > 0 ? (
              <ul className="grid grid-custom-cols-1 grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                {filteredCharacters.map((char: CharacterOrigin) => (
                  <CardCharacter key={char.id} data={char} />
                ))}
              </ul>
            ) : (
              <div>
                <p className="text-center text-gray-800">
                  Nenhum personagem encontrado.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default PlanetPage;

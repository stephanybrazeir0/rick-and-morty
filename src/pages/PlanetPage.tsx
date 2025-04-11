import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import CardDetailingPlanet from "../components/CardDetailingPlanet";
import GetPlanet from "../queries/GetPlanet";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CharacterOrigin } from "../types/Character";
import CardCharacter from "../components/CardCharacter";
import CharactersWithOrigin from "../queries/CharactersWithOrigin";

const PlanetPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const characterId = searchParams.get("characterId");
  if (!characterId) {
    navigate("/", { replace: true });
  }

  const {
    data: planetData,
    loading: planetLoading,
    error: planetError,
  } = useQuery(GetPlanet, {
    variables: { id: params.id },
  });

  const { data: charactersData, loading: charactersLoading } = useQuery(
    CharactersWithOrigin,
    { variables: { characterId } }
  );

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
            ) : charactersData.character.origin.residents.length > 0 ? (
              <ul className="grid grid-custom-cols-1 grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                {charactersData.character.origin.residents.map(
                  (char: CharacterOrigin) => (
                    <CardCharacter key={char.id} data={char} />
                  )
                )}
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

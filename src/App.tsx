import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardCharacter from "./components/CardCharacter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Character } from "./types/Character";
import AllCharacters from "./queries/GetAllCharacters";
import GetCharacter from "./queries/GetCharacter";
import Spinner from "./components/Spinner";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const isSearching = searchTerm.trim() !== "";
  const { data, loading, error } = useQuery(
    isSearching ? GetCharacter : AllCharacters,
    isSearching ? { variables: { searchTerm } } : undefined
  );

  return (
    <>
      <Navbar />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="centralized-container">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>
            <p className="text-red-900 font-medium text-center p-2">
              Ocorreu um erro: {error.message}
            </p>
          </div>
        ) : data?.characters?.results?.length > 0 ? (
          <ul className="grid grid-custom-cols-1 grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {data.characters.results.map((character: Character) => (
              <CardCharacter key={character.id} data={character} />
            ))}
          </ul>
        ) : (
          <div>
            <p className="text-center text-gray-800 mt-4">
              Nenhum personagem encontrado.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;

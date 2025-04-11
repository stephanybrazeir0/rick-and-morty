import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardCharacter from "./components/CardCharacter";
import Spinner from "./components/Spinner";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useDebounce } from "react-use";
import { Character } from "./types/Character";
import AllCharacters from "./queries/GetAllCharacters";
import GetCharacter from "./queries/GetCharacter";
import Pagination from "./components/Pagination";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCharacterDisplay, setCurrentCharacterDisplay] =
    useState<number>(20);

  const handleClickPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    setCurrentCharacterDisplay(currentCharacterDisplay - 20);
  };

  const handleClickNext = () => {
    const totalPages = data?.characters?.info?.pages;
    const hasNextPage = !!data?.characters?.info?.next;
    if (currentPage === totalPages || !hasNextPage) return;
    setCurrentPage(currentPage + 1);
    setCurrentCharacterDisplay(currentCharacterDisplay + 20);
  };

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const isSearching = debounceSearchTerm.trim() !== "";

  const { data, loading, error } = useQuery(
    isSearching ? GetCharacter : AllCharacters,
    isSearching
      ? { variables: { searchTerm: debounceSearchTerm } }
      : { variables: { currentPage } }
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
            <p className="text-center text-gray-800">
              Nenhum personagem encontrado.
            </p>
          </div>
        )}
      </main>

      <div className="centralized-container mb-5">
        <div className="flex justify-between items-center">
          <h3>
            Página {currentPage} de {data?.characters?.info?.pages}
          </h3>

          <Pagination
            info={data?.characters?.info}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardCharacter from "./components/CardCharacter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Characters } from "./types/Characters";
import AllCharacters from "./queries/GetAllCharacters";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data } = useQuery(AllCharacters);
  //adicionar loading e error na query e tratar em baixo
  
  return (
    <>
      <Navbar />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {!data || !data.characters ? (
        <h1>Erro!</h1>
      ) : (
        <div className="grid grid-custom-cols-1 grid-cols-2 md:grid-cols-4 gap-5 centralized-container">
          {data.characters.results.map((character: Characters) => (
            <CardCharacter key={character.id} data={character} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;

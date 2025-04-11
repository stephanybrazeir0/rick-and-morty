import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardDetailingCharacter from "../components/CardDetailingCharacter";
import DetailingCharacter from "../queries/DetailingCharacter";

const CharacterPage = () => {
  const params = useParams();
  const { data } = useQuery(DetailingCharacter, {
    variables: { id: params.id },
  });

  return (
    <>
      <Navbar />
      <main className="centralized-container">
        {data ? (
          <CardDetailingCharacter data={data.character} />
        ) : (
          <h1>Erro!</h1>
        )}
      </main>
    </>
  );
};

export default CharacterPage;

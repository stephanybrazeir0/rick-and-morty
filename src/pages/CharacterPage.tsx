import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardDetailingCharacter from "../components/CardDetailingCharacter";
import DetailingCharacter from "../queries/DetailingCharacter";
import Spinner from "../components/Spinner";

const CharacterPage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(DetailingCharacter, {
    variables: { id: params.id },
  });

  return (
    <>
      <Navbar />
      <main className="centralized-container">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>
            <p className="text-red-900 font-medium text-center p-2">
              Ocorreu um erro: {error.message}
            </p>
          </div>
        ) : (
          <CardDetailingCharacter data={data.character} />
        )}
      </main>
    </>
  );
};

export default CharacterPage;

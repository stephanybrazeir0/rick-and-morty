import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import CardDetailingPlanet from "../components/CardDetailingPlanet";
import GetPlanet from "../queries/GetPlanet";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const PlanetPage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(GetPlanet, {
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
          <div>
            <CardDetailingPlanet data={data.location} /> 
          </div>
        )}
      </main>
    </>
  );
};

export default PlanetPage;

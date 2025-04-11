import { Routes, Route } from "react-router-dom";
import App from "./App";
import CharacterPage from "./pages/CharacterPage";
import PlanetPage from "./pages/PlanetPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="/planet/:id" element={<PlanetPage />} />
    </Routes>
  );
}

export default AppRoutes;

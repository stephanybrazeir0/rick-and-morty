import { Routes, Route } from "react-router-dom";
import App from "./App";
import CharacterPage from "./pages/CharacterPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  );
}

export default AppRoutes;

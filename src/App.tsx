import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      <Navbar />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </>
  );
}

export default App;

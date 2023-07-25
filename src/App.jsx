import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Pokemon from "./components/Pokemon";
import PokemonStats from "./components/PokemonStats";
import Trainers from "./components/Trainers";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Trainers" element={<Trainers />} />
        <Route path="/Trainers/Pokemon" element={<Pokemon />} />
        <Route
          path="/Trainers/Pokemon/:id"
          element={<PokemonStats />}
        />
      </Routes>
    </div>
  );
}

export default App;

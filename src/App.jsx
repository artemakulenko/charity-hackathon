import "./index.css";
import Header from "./components/Header/Header";
import Container from "./components/UI/Container/Container";
import { Route, Routes } from "react-router-dom";

import { Game } from "./components/pages/Game";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:difficulty" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;

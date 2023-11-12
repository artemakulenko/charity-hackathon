import "./index.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

import { Game } from "./components/pages/Game";
import { Home } from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/charity-hackathon/" element={<Home />} />
				<Route path="/charity-hackathon/game/:difficulty" element={<Game />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;

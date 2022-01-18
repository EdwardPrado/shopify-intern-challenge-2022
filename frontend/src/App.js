import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Likes from "./pages/Likes/Likes";
import Date from "./pages/Date/Date";
import Search from "./pages/Search/Search";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/likes" element={<Likes />} />
						<Route exact path="/post" element={<Date />} />
						<Route exact path="/search" element={<Search />} />
					</Routes>
				</Router>
			</main>
		</>
	);
}

export default App;

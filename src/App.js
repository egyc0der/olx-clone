import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import CatsAccordion from "./components/CatsAccordion";
import Footer from "./components/Footer";
import ItemDetails from "./pages/ItemDetails";
import CreateAdd from "./pages/CreateAdd";

const GlobalCont = styled.div`
	overflow: auto;
`;
const Hr = styled.hr`
	border: 0.5px solid #e7ebeb;

`;
const AppCont = styled.div`
	padding: 0 1.5rem;

	@media (min-width: 1800px) {
		padding: 0 10rem;
	}
`;

function App() {
	return (
		<Router>
			<GlobalCont>
				<Navbar />
				<CatsAccordion />
				<Hr />
				<AppCont>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/item/:id' element={<ItemDetails />} />
						<Route path='/sell' element={<CreateAdd />} />
					</Routes>
				</AppCont>
				<Footer />
			</GlobalCont>
		</Router>
	);
}

export default App;

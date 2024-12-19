import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/footer';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route index element={<Home />} />
					{/* <Route path="contact" element={<Contact />} /> */}
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

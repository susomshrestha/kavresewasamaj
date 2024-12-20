import { Route, Routes } from 'react-router';

import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/footer';
import Introduction from './pages/Introduction/introduction';

import './App.css';
import Members from './pages/Members/members';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<div className="max-w-screen-xl mx-auto pt-[100px]">
					<Routes>
						<Route index element={<Home />} />
						<Route path="introduction" element={<Introduction />} />
						<Route path="members" element={<Members />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;

import { Route, Routes } from 'react-router';

import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/footer';
import Introduction from './pages/Introduction/introduction';

import './App.css';
import Members from './pages/Members/members';
import Gallery from './pages/Gallery/gallery';
import Blog from './pages/Blog/blog';
import BlogList from './pages/BlogList/blogList';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<div className="max-w-screen-xl mx-auto p-4 pt-[100px]">
					<Routes>
						<Route index element={<Home />} />
						<Route path="introduction" element={<Introduction />} />
						<Route path="members" element={<Members />} />
						<Route path="gallery" element={<Gallery />} />
						<Route path="blog/:slug" element={<Blog />} />
						<Route path="blog" element={<BlogList />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;

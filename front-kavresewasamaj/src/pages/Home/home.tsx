import { useEffect } from 'react';
import HeroBlog from '../../components/heroBlog';
import ImageCarousel from '../../components/imageCarousel';
import { PostService } from '../../sanity/services/postService';

export default function Home() {
	// const [posts, setPosts] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const fetchedPosts = await PostService.fetchAllPosts();
				console.log(fetchedPosts);
				// setPosts(fetchedPosts);
			} catch (err) {
				console.log(err);
				// setError(err.message);
			} finally {
				// setLoading(false);
			}
		};

		loadPosts();
	}, []);

	return (
		<div className="max-w-screen-xl mx-auto">
			<ImageCarousel />
			<HeroBlog />
		</div>
	);
}

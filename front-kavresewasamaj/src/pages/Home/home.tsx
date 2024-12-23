import { useEffect, useState } from 'react';
import HeroBlog from '../../components/heroBlog';
import ImageCarousel from '../../components/imageCarousel';
import { PostService } from '../../sanity/services/postService';
import { IPost } from '../../interfaces/interfaces';

export default function Home() {
	const [featuredPosts, setFeaturedPosts] = useState<IPost[]>([]);
	const [latestPosts, setLatestPosts] = useState<IPost[]>([]);

	const latestPage = 1;
	const latestPageSize = 4;

	useEffect(() => {
		const loadFeatured = async () => {
			try {
				const res = await PostService.fetchFeaturedPosts();
				setFeaturedPosts(res);
			} catch (err) {
				console.log(err);
			}
		};

		loadFeatured();
	}, []);

	useEffect(() => {
		const loadLatestPosts = async () => {
			try {
				const fetchedPosts = await PostService.fetchAllPosts(latestPage, latestPageSize);
				setLatestPosts(fetchedPosts);
			} catch (err) {
				console.log(err);
			}
		};

		loadLatestPosts();
	}, []);

	return (
		<>
			<ImageCarousel carouselItems={featuredPosts} />
			<HeroBlog posts={latestPosts} />
		</>
	);
}

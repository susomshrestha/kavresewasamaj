import { useEffect, useState } from 'react';
import { IPost } from '../../interfaces/interfaces';
import { PostService } from '../../sanity/services/postService';
import { NavLink } from 'react-router';
import Pagination from '../../components/pagination';

export default function BlogList() {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const pageSize = 1;

	const fetchPosts = async () => {
		try {
			const res = await PostService.fetchAllPosts(page, pageSize, true);
			setPosts(res.posts);
			setTotalCount(res.totalPosts);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	return (
		<>
			<div className="text-4xl font-extrabold mb-10">Posts</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) => (
					<NavLink
						key={post._id}
						to={`/blog/${post.slug}`}
						className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
						<img
							src={post.imageUrl}
							alt={post.title}
							className="w-full h-64 object-cover rounded-lg mb-4"
						/>
						<div className="flex items-center gap-4 mb-2">
							<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
								{post.category.title}
							</span>
							<span className="text-gray-500 text-sm">{post.publishedAt}</span>
						</div>
						<h3 className="text-2xl font-bold mb-3 line-clamp-2">{post.title}</h3>
					</NavLink>
				))}
			</div>
			<div className='mt-8'>
				<Pagination
					pageNumber={page}
					pageSize={pageSize}
					totalRecords={totalCount}
					onPageChange={setPage}></Pagination>
			</div>
		</>
	);
}

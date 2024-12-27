import { useEffect, useState } from 'react';

import { IPost } from '../../interfaces/interfaces';
import { PostService } from '../../sanity/services/postService';
import Pagination from '../../components/pagination';
import BlogItem from '../../components/blogItem';

export default function BlogList() {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const pageSize = 12;

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

	if (posts.length === 0) {
		return (
			<div className="flex items-center justify-center text-xl font-bold min-h-96">
				No posts available in this category.
			</div>
		);
	}

	return (
		<>
			<div className="text-4xl font-extrabold mb-10">Posts</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) => (
					<BlogItem key={post._id} post={post} />
				))}
			</div>
			<div className="mt-8">
				<Pagination
					pageNumber={page}
					pageSize={pageSize}
					totalRecords={totalCount}
					onPageChange={setPage}></Pagination>
			</div>
		</>
	);
}

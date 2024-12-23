import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IPost } from '../../interfaces/interfaces';
import { PostService } from '../../sanity/services/postService';
import Pagination from '../../components/pagination';
import BlogItem from '../../components/blogItem';

export default function Category() {
	const { category } = useParams();

	const [posts, setPosts] = useState<IPost[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const pageSize = 12;

	const fetchPosts = async () => {
		try {
			const res = await PostService.fetchAllPostsByCategory(page, pageSize, category!);
			setPosts(res.posts);
			setTotalCount(res.totalPosts);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, category]);

	if (posts.length === 0) {
		return (
			<div className="flex items-center justify-center text-xl font-bold min-h-96">
				No posts available in this category.
			</div>
		);
	}

	return (
		<>
			<div className="text-4xl font-extrabold mb-10">{category}</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) => (
					<BlogItem post={post} />
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

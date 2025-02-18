import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PortableTextComponent } from '../../components/portableTextComponent';
import { PostService } from '../../sanity/services/postService';
import { IPost } from '../../interfaces/interfaces';
import formatDate from '../../helpers/helpers';

export default function Blog() {
	const { slug: slug } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState<IPost>();

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const res = await PostService.fetchPostBySlug(slug!);
				setPost(res);
			} catch (error) {
				console.log(error);
			}
		};

		fetchBlog();
	}, [slug]);

	return (
		<>
			{post && (
				<div>
					<div className="flex flex-col gap-4 p-6">
						<div className="relative h-56 md:h-96">
							<img
								src={post.imageUrl}
								alt={post.title}
								className="w-full h-full object-cover object-center"
							/>
						</div>
						<div
							onClick={(e) => {
								e.preventDefault();
								navigate(`/category/${post.category.title}`);
							}}
							className="bg-blue-100 cursor-pointer text-blue-800 text-sm font-medium px-2 py-1 rounded-md w-fit">
							{post.category.title}
						</div>
						<div className="text-gray-500 text-sm">{formatDate(post.publishedAt)}</div>
						<div className="text-xl font-bold mb-3 md:text-4xl">{post.title}</div>
						<PortableTextComponent content={post.body} />
					</div>
				</div>
			)}
		</>
	);
}

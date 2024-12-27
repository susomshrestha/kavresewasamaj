import { NavLink, useNavigate } from 'react-router';

import { IPost } from '../interfaces/interfaces';
import formatDate from '../helpers/helpers';

export default function BlogItem({ post, isSmall = false }: { post: IPost; isSmall?: boolean }) {
	const navigate = useNavigate();

	return (
		<NavLink
			to={`/blog/${post.slug}`}
			className={`bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow ${
				isSmall ? 'p-4' : 'p-8'
			}`}>
			<div className={`flex gap-4 ${!isSmall && 'flex-col'}`}>
				<img
					src={post.imageUrl}
					alt={post.title}
					className={`object-cover rounded-lg ${!isSmall ? 'w-full h-64' : 'h-28 w-28'}`}
				/>
				<div>
					<div className={`flex items-center justify-between ${isSmall ? 'mb-2' : 'my-2'}`}>
						<span
							onClick={(e) => {
								e.preventDefault();
								navigate(`/category/${post.category.title}`);
							}}
							className="cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
							{post.category.title}
						</span>
						<span className="text-gray-500 text-sm">{formatDate(post.publishedAt)}</span>
					</div>
					<h3 className={`font-bold ${isSmall ? 'line-clamp-2 text-xl' : 'line-clamp-3 text-2xl'}`}>
						{post.title}
					</h3>
				</div>
			</div>
		</NavLink>
	);
}

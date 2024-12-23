import { NavLink } from 'react-router';
import { IPost } from '../interfaces/interfaces';

export default function BlogItem({ post }: { post: IPost }) {
	return (
		<NavLink
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
	);
}

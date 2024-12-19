import { NavLink } from 'react-router';

interface BlogPost {
	id: string;
	image: string;
	category: string;
	title: string;
	content: string;
	date: string;
	link: string;
}

const HeroBlog = () => {
	const blogPosts: BlogPost[] = [
		{
			id: '1',
			image: '/path-to-your-image1.jpg',
			category: 'News',
			title: 'The Future of Web Development',
			content: 'Explore the latest trends and innovations shaping the future of web development...',
			date: 'December 15, 2023',
			link: '/blog/web-development',
		},
		{
			id: '2',
			image: '/path-to-your-image2.jpg',
			category: 'News',
			title: 'UI Design Principles',
			content: 'Learn the fundamental principles of creating effective user interfaces...',
			date: 'December 14, 2023',
			link: '/blog/ui-design',
		},
		{
			id: '3',
			image: '/path-to-your-image3.jpg',
			category: 'News',
			title: 'Getting Started with React',
			content: 'A comprehensive guide to building your first React application...',
			date: 'December 13, 2023',
			link: '/blog/react-tutorial',
		},
		{
			id: '4',
			image: '/path-to-your-image3.jpg',
			category: 'News',
			title: 'Getting Started with React',
			content: 'A comprehensive guide to building your first React application...',
			date: 'December 13, 2023',
			link: '/blog/react-tutorial',
		},
	];

	return (
		<section>
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold">Latest News</h2>
					<NavLink to="/blog" className="text-blue-600 hover:underline font-medium">
						See all...
					</NavLink>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Featured Post */}
					<NavLink
						to={blogPosts[0].link}
						className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
						<img
							src={blogPosts[0].image}
							alt={blogPosts[0].title}
							className="w-full h-64 object-cover rounded-lg mb-4"
						/>
						<div className="flex items-center gap-4 mb-2">
							<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
								{blogPosts[0].category}
							</span>
							<span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
						</div>
						<h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
						<p className="text-gray-500">{blogPosts[0].content}</p>
					</NavLink>

					{/* Smaller Posts */}
					<div className="flex flex-col gap-8">
						{blogPosts.slice(1, 4).map((post) => (
							<NavLink
								key={post.id}
								to={post.link}
								className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
								<div className="flex gap-4">
									<img
										src={post.image}
										alt={post.title}
										className="w-20 h-20 object-cover rounded-lg"
									/>
									<div className="flex flex-col">
										<div className="flex items-center gap-4 mb-2">
											<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
												{post.category}
											</span>
											<span className="text-gray-500 text-sm">{post.date}</span>
										</div>
										<h3 className="text-xl font-bold">{post.title}</h3>
									</div>
								</div>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBlog;

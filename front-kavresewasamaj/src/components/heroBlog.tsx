import { NavLink } from 'react-router';
import { IPost } from '../interfaces/interfaces';

const HeroBlog = ({ posts }: { posts: IPost[] }) => {
	return (
		<section>
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold">Latest News</h2>
					<NavLink to="/blog" className="text-blue-600 hover:underline font-medium">
						See all...
					</NavLink>
				</div>

				{posts && posts.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Featured Post */}
						<NavLink
							to={`/blog/${posts[0].slug}`}
							className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
							<img
								src={posts[0].imageUrl}
								alt={posts[0].title}
								className="w-full h-64 object-cover rounded-lg mb-4"
							/>
							<div className="flex items-center gap-4 mb-2">
								<NavLink to={`/category/${posts[0].category.title}`}>
									<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
										{posts[0].category.title}
									</span>
								</NavLink>
								<span className="text-gray-500 text-sm">{posts[0].publishedAt}</span>
							</div>
							<h3 className="text-2xl font-bold mb-3 line-clamp-3">{posts[0].title}</h3>
							{/* <p className="text-gray-500">{posts[0].body || '...'}</p> */}
						</NavLink>

						{/* Smaller Posts */}
						<div className="flex flex-col gap-8">
							{posts.slice(1, 4).map((post) => (
								<NavLink
									key={post._id}
									to={`/blog/${post.slug}`}
									className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
									<div className="flex gap-4">
										<img
											src={post.imageUrl}
											alt={post.title}
											className="w-20 h-20 object-cover rounded-lg"
										/>
										<div className="flex flex-col">
											<div className="flex items-center gap-4 mb-2">
												<NavLink to={`/category/${post.category.title}`}>
													<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
														{post.category.title}
													</span>
												</NavLink>
												<span className="text-gray-500 text-sm">{post.publishedAt}</span>
											</div>
											<h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
										</div>
									</div>
								</NavLink>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default HeroBlog;

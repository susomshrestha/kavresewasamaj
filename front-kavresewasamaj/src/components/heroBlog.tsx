import { NavLink } from 'react-router';

import { IPost } from '../interfaces/interfaces';
import BlogItem from './blogItem';

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
						<BlogItem post={posts[0]} />

						{/* Smaller Posts */}
						<div className="flex flex-col gap-4">
							{posts.slice(1, 4).map((post) => (
								<BlogItem key={post._id} post={post} isSmall={true} />
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default HeroBlog;

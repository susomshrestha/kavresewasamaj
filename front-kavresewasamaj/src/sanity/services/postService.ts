import client from '../sanityClient';
import {
	getAllPosts,
	getAllPostsWithCount,
	getFeaturedPosts,
	getPostBySlug,
} from '../queries/postQueries';

export const PostService = {
	async fetchAllPosts(page: number, pageSize: number = 10, withCount: boolean = false) {
		try {
			return await client.fetch(withCount ? getAllPostsWithCount : getAllPosts, {
				start: page - 1,
				end: page * pageSize,
			});
		} catch (error) {
			console.error('Error fetching posts:', error);
			throw error;
		}
	},

	async fetchPostBySlug(slug: string) {
		try {
			return await client.fetch(getPostBySlug, { slug: slug });
		} catch (error) {
			console.error('Error fetching post:', error);
			throw error;
		}
	},

	async fetchFeaturedPosts() {
		try {
			return await client.fetch(getFeaturedPosts);
		} catch (error) {
			console.error('Error fetching feature posts:', error);
			throw error;
		}
	},
};

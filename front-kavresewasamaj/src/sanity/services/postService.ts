import client from '../sanityClient';
import { getAllPosts, getPostBySlug } from '../queries/postQueries';

export const PostService = {
	async fetchAllPosts() {
		try {
			return await client.fetch(getAllPosts);
		} catch (error) {
			console.error('Error fetching posts:', error);
			throw error;
		}
	},

	async fetchPostBySlug(slug: string) {
		try {
			return await client.fetch(getPostBySlug(slug));
		} catch (error) {
			console.error('Error fetching post:', error);
			throw error;
		}
	},
};

import { getPageById } from '../queries/pageQueries';
import client from '../sanityClient';

export const PageService = {
	async fetchPageByDocument(docId: string) {
		try {
			return await client.fetch(getPageById, { id: docId });
		} catch (error) {
			console.error('Error fetching page:', error);
			throw error;
		}
	},
};

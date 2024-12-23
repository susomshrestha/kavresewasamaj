import { getGalleryImages } from '../queries/galleryQueries';
import client from '../sanityClient';

export const GalleryService = {
	async fetchGallery() {
		try {
			return await client.fetch(getGalleryImages);
		} catch (error) {
			console.error('Error fetching gallery:', error);
			throw error;
		}
	},
};

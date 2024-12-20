import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'm7n0wv06', // Find this in sanity.json
	dataset: 'production', // or 'development'
	apiVersion: '2024-01-01', // Use current date in YYYY-MM-DD format
	useCdn: true, // Enable if you want faster, cached responses
});

export default client;

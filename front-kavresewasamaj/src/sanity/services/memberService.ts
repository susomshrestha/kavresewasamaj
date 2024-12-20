import { getAllMembers } from '../queries/memberQueries';
import client from '../sanityClient';

export const MemberService = {
	async fetchAllMembers() {
		try {
			return await client.fetch(getAllMembers);
		} catch (error) {
			console.error('Error fetching members:', error);
			throw error;
		}
	},
};

export default function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'short', // Abbreviated month (e.g., "Dec")
		day: '2-digit', // Day with leading zero if needed (e.g., "27")
		year: 'numeric', // Full year (e.g., "2024")
	});
}

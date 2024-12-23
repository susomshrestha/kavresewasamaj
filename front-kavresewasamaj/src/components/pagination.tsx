import { PaginationProps } from '../interfaces/interfaces';

function Pagination({
	pageNumber = 1,
	pageSize = 10,
	totalRecords = 0,
	onPageChange,
}: PaginationProps) {
	const totalPages = Math.ceil(totalRecords / pageSize);
	const startRecord = (pageNumber - 1) * pageSize + 1;
	const endRecord = Math.min(pageNumber * pageSize, totalRecords);

	const generatePageNumbers = () => {
		const pages: (number | { id: string; value: number })[] = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i += 1) {
				pages.push(i);
			}
		} else {
			pages.push(1);

			if (pageNumber <= 3) {
				pages.push(2, 3, 4);
				pages.push({ id: 'ellipsis-end', value: -1 });
				pages.push(totalPages);
			} else if (pageNumber >= totalPages - 2) {
				pages.push({ id: 'ellipsis-start', value: -1 });
				for (let i = totalPages - 3; i <= totalPages; i += 1) {
					pages.push(i);
				}
			} else {
				pages.push({ id: 'ellipsis-start', value: -1 });
				pages.push(pageNumber - 1, pageNumber, pageNumber + 1);
				pages.push({ id: 'ellipsis-end', value: -1 });
				pages.push(totalPages);
			}
		}

		return pages;
	};

	if (totalPages <= 1 && totalRecords <= pageSize) {
		return null;
	}

	return (
		<div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
			<div className="flex items-center gap-4">
				<span className="text-gray-500">
					Showing {startRecord} - {endRecord} of {totalRecords}
				</span>
			</div>

			<div className="flex items-center gap-2">
				<div className="flex items-center space-x-1">
					<button
						onClick={() => onPageChange(pageNumber - 1)}
						disabled={pageNumber === 1}
						className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded disabled:bg-gray-300">
						<svg
							fill="currentColor"
							viewBox="-8.5 0 32 32"
							className="w-4 h-4"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<title>left</title>
								<path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path>
							</g>
						</svg>
					</button>

					{generatePageNumbers().map((item) =>
						typeof item === 'number' ? (
							<button
								key={`page-${item}`}
								onClick={() => onPageChange(item)}
								className={`px-3 py-1 rounded-md ${
									item === pageNumber ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'
								}`}>
								{item}
							</button>
						) : (
							<button
								key={item.id}
								disabled
								className="px-3 py-1 bg-transparent text-gray-500 cursor-default">
								...
							</button>
						)
					)}

					<button
						onClick={() => onPageChange(pageNumber + 1)}
						disabled={pageNumber === totalPages}
						className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded disabled:bg-gray-300">
						<svg
							fill="currentColor"
							viewBox="-8.5 0 32 32"
							height={20}
							width={20}
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							transform="matrix(-1, 0, 0, 1, 0, 0)">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<title>left</title>
								<path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path>
							</g>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Pagination;

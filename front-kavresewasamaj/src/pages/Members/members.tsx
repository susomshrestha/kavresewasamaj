import { useEffect, useState } from 'react';
import { MemberService } from '../../sanity/services/memberService';

interface Member {
	_id: number;
	name: string;
	position: string;
	imageUrl: string;
}

export default function Members() {
	const [members, setMembers] = useState<Member[]>([]);

	useEffect(() => {
		const loadMembers = async () => {
			try {
				const res = await MemberService.fetchAllMembers();
				console.log(res);

				setMembers(res);
			} catch (err) {
				console.log(err);
			}
		};

		loadMembers();
	}, []);

	return (
		<>
			<div className="text-4xl font-extrabold mb-4">Members</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{members.map((member) => (
					<div
						key={member._id}
						className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
							{member.imageUrl ? (
								<img
									className="w-32 h-32 rounded-full mb-3"
									src={member.imageUrl}
									alt={member.name}
								/>
							) : (
								<svg
									className="w-32 h-32 mb-3 rounded-full text-gray-200"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18">
									<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
								</svg>
							)}
							<h5 className="mb-1 text-xl font-medium text-gray-900">{member.name}</h5>
							<span className="text-sm text-gray-500">{member.position}</span>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

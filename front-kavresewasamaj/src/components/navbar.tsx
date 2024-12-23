import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import logo from '../assets/logo.png';

interface NavItem {
	name: string;
	path: string;
	dropdownItems?: { name: string; path: string }[];
}

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const isActive = (path: string) => location.pathname === path;

	const navLinkClasses = (path: string) => {
		const baseClasses = 'block p-2 rounded';
		const activeClasses = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700';
		const inactiveClasses =
			'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700';

		return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
	};

	const navItems: NavItem[] = [
		{ name: 'Home', path: '/' },
		{
			name: 'About Us',
			path: '#',
			dropdownItems: [
				{ name: 'Introduction', path: '/introduction' },
				{ name: 'Members', path: '/members' },
			],
		},
		// { name: 'News', path: '/news' },
		{ name: 'Gallery', path: '/gallery' },
		{ name: 'Contact', path: '/contact' },
	];

	return (
		<nav className="bg-white border-gray-200 fixed z-[99] w-full">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src={logo} className="h-8" alt="Kavre sewa samaj Logo" />
					<span className="self-center text-xl font-semibold whitespace-nowrap">
						Kavre Sewa Samaj
					</span>
				</NavLink>

				<button
					onClick={toggleMenu}
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>

				<div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
						{navItems.map((item, index) => (
							<li key={index} className={item.dropdownItems ? 'relative' : ''}>
								{item.dropdownItems ? (
									<>
										<button
											onClick={toggleDropdown}
											className="flex items-center justify-start w-full py-2 px-3 rounded md:border-0 md:w-auto">
											{item.name}
											<svg
												className="w-2.5 h-2.5 ms-2.5"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 10 6">
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="m1 1 4 4 4-4"
												/>
											</svg>
										</button>
										<div
											className={`${
												isDropdownOpen ? 'block' : 'hidden'
											} md:absolute md:z-10 w-full md:w-44 md:font-normal md:bg-white md:divide-y md:divide-gray-100 md:rounded-lg md:shadow`}>
											<ul className="py-2 text-sm text-gray-700 md:border-none">
												{item.dropdownItems.map((dropdownItem, dropdownIndex) => (
													<li key={dropdownIndex}>
														<NavLink
															to={dropdownItem.path}
															className={navLinkClasses(dropdownItem.path)}>
															{dropdownItem.name}
														</NavLink>
													</li>
												))}
											</ul>
										</div>
									</>
								) : (
									<NavLink to={item.path} className={navLinkClasses(item.path)}>
										{item.name}
									</NavLink>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

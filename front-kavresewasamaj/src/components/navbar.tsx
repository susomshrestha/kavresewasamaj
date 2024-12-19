import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import logo from '../assets/logo.png';

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

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	const navLinkClasses = (path: string) => {
		const baseClasses = 'block py-2 px-3 rounded';
		const activeClasses = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700';
		const inactiveClasses =
			'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700';

		return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
	};

	const isDropdownActive = () => {
		const dropdownPaths = ['/introduction', '/members'];
		return dropdownPaths.some((path) => location.pathname === path);
	};

	const dropdownButtonClasses = () => {
		const baseClasses =
			'flex items-center justify-start w-full py-2 px-3 rounded md:border-0 md:w-auto';
		const activeClasses = 'text-blue-700 hover:text-blue-800';
		const inactiveClasses =
			'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700';

		return `${baseClasses} ${isDropdownActive() ? activeClasses : inactiveClasses}`;
	};

	return (
		<nav className="bg-white border-gray-200 fixed z-[99] w-full">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src={logo} className="h-8" alt="Kavre sewa samaj Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap">
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
						<li>
							<NavLink to="/" className={navLinkClasses('/')} aria-current="page">
								Home
							</NavLink>
						</li>

						<li className="relative">
							<button onClick={toggleDropdown} className={dropdownButtonClasses()}>
								About Us
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
									<li>
										<NavLink to="/introduction" className={navLinkClasses('/introduction')}>
											Introduction
										</NavLink>
									</li>
									<li>
										<NavLink to="/members" className={navLinkClasses('/members')}>
											Members
										</NavLink>
									</li>
								</ul>
							</div>
						</li>

						<li>
							<NavLink to="/news" className={navLinkClasses('/news')}>
								News
							</NavLink>
						</li>

						<li>
							<NavLink to="/contact" className={navLinkClasses('/contact')}>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

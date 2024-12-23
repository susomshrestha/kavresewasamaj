import { useState } from 'react';
import { IPost } from '../interfaces/interfaces';
import { NavLink } from 'react-router';

const ImageCarousel = ({ carouselItems }: { carouselItems: IPost[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () => {
		setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
	};

	return (
		<div className="relative w-full">
			<div className="relative h-[80vh] overflow-hidden rounded-lg">
				{carouselItems.map((item, index) => (
					<NavLink to={`/blog/${carouselItems[activeIndex].slug}`} key={item._id}>
						<div
							className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
								activeIndex === index ? 'opacity-100' : 'opacity-0'
							}`}>
							<img
								src={item.imageUrl}
								className="absolute w-full h-full object-cover object-bottom"
								alt={item.title}
							/>
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 bg-black bg-opacity-50 text-white p-4">
								<p className="text-center text-3xl font-bold">{item.title}</p>
							</div>
						</div>
					</NavLink>
				))}
			</div>

			<button
				type="button"
				className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				onClick={prevSlide}>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
					<svg
						className="w-4 h-4 text-white rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>

			<button
				type="button"
				className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				onClick={nextSlide}>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
					<svg
						className="w-4 h-4 text-white rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};

export default ImageCarousel;

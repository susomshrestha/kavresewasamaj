import { useState } from 'react';

interface CarouselItem {
	id: number;
	image: string;
	text: string;
}

const ImageCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const carouselItems: CarouselItem[] = [
		{
			id: 1,
			image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
			text: 'Beautiful Mountain Landscape',
		},
		{
			id: 2,
			image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
			text: 'Serene Ocean View',
		},
		{
			id: 3,
			image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
			text: 'City Skyline at Night',
		},
		{
			id: 4,
			image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
			text: 'Forest Adventure',
		},
		{
			id: 5,
			image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
			text: 'Desert Sunset',
		},
	];

	const nextSlide = () => {
		setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
	};

	return (
		<div className="relative w-full pt-[100px]">
			<div className="relative h-[80vh] overflow-hidden rounded-lg">
				{carouselItems.map((item, index) => (
					<div
						key={item.id}
						className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
							activeIndex === index ? 'opacity-100' : 'opacity-0'
						}`}>
						<img
							src={item.image}
							className="absolute w-full h-full object-cover object-bottom"
							alt={item.text}
						/>
						<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 bg-black bg-opacity-50 text-white p-4">
							<p className="text-center">{item.text}</p>
						</div>
					</div>
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

import { useNextSanityImage } from 'next-sanity-image';
import client from '../sanity/sanityClient';

interface ImageWithLayoutProps {
	value: {
		image: {
			asset: {
				_ref: string;
				_type: 'reference';
			};
		};
		layout: 'full' | 'left' | 'right';
		alt: string;
		caption?: string;
	};
}

export const ImageWithLayout: React.FC<ImageWithLayoutProps> = ({ value }) => {
	const { src, width, height } = useNextSanityImage(client, value.image);

	const layoutClasses = {
		full: 'w-full mb-8',
		left: 'float-left mr-8 mb-4 w-1/3',
		right: 'float-right ml-8 mb-4 w-1/3',
	};

	return (
		<figure className={layoutClasses[value.layout]}>
			<img
				src={src}
				width={width}
				height={height}
				alt={value.alt}
				className="rounded-lg w-full h-auto"
				loading="lazy"
			/>
			{value.caption && (
				<figcaption className="text-sm text-gray-600 mt-2 text-center">{value.caption}</figcaption>
			)}
		</figure>
	);
};

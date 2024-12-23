import React, { useEffect, useState } from 'react';
import { GalleryService } from '../../sanity/services/galleryService';
import { IGallery } from '../../interfaces/interfaces';

const Gallery: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [gallery, setGallery] = useState<IGallery[]>([]);

	useEffect(() => {
		const loadMembers = async () => {
			try {
				const res = await GalleryService.fetchGallery();
				console.log(res);

				setGallery(res);
			} catch (err) {
				console.log(err);
			}
		};

		loadMembers();
	}, []);

	const openImage = (index: number) => {
		setSelectedImage(index);
	};

	const closeImage = () => {
		setSelectedImage(null);
	};

	const nextImage = () => {
		if (selectedImage !== null) {
			setSelectedImage((selectedImage + 1) % gallery.length);
		}
	};

	const prevImage = () => {
		if (selectedImage !== null) {
			setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
		}
	};

	return (
		<>
			<div className="text-4xl font-extrabold mb-10">Gallery</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{gallery.map((image, index) => (
					<div key={image._id} onClick={() => openImage(index)} className="cursor-pointer">
						<img className="h-auto max-w-full rounded-lg" src={image.imageUrl} alt={image.alt} />
					</div>
				))}

				{selectedImage !== null && (
					<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[100]">
						<button
							className="absolute top-4 right-4 w-10 h-10 text-xl flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							onClick={closeImage}>
							&times;
						</button>
						<button
							className="absolute left-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							onClick={prevImage}>
							&#8592;
						</button>
						<img
							className="max-h-full max-w-full rounded-lg"
							src={gallery[selectedImage].imageUrl}
							alt={`Selected image ${selectedImage + 1}`}
						/>
						<button
							className="absolute right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							onClick={nextImage}>
							&#8594;
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Gallery;

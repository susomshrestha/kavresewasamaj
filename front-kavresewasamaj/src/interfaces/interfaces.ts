export interface ICategory {
	_id: string;
	title: string;
	description: string;
}

export interface IPost {
	_id: string;
	title: string;
	category: ICategory;
	slug: string;
	publishedAt: string;
	imageUrl: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body: any;
}

export interface IMember {
	_id: number;
	name: string;
	position: string;
	imageUrl: string;
}

export interface IGallery {
	_id: number;
	alt: string;
	imageUrl: string;
}

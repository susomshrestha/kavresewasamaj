import { PortableText } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';
import type { PortableTextComponents } from '@portabletext/react';
import { ImageWithLayout } from './imageWithLayout';

interface PortableTextComponentProps {
	content: TypedObject | TypedObject[];
}

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p className="mb-4">{children}</p>,
		h1: ({ children }) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
		h2: ({ children }) => <h2 className="text-2xl font-bold mb-5">{children}</h2>,
		blockquote: ({ children }) => (
			<blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
		),
	},
	marks: {
		link: ({ value, children }) => {
			const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
			return (
				<a
					href={value?.href}
					target={target}
					rel={target === '_blank' ? 'noopener noreferrer' : undefined}
					className="text-blue-600 hover:underline">
					{children}
				</a>
			);
		},
		strong: ({ children }) => <strong className="font-bold">{children}</strong>,
		em: ({ children }) => <em className="italic">{children}</em>,
		left: ({ children }) => <span className="text-left">{children}</span>,
		center: ({ children }) => <span className="text-center block">{children}</span>,
		right: ({ children }) => <span className="text-right">{children}</span>,
	},
	list: {
		bullet: ({ children }) => <ul className="list-disc ml-4 mb-4">{children}</ul>,
		number: ({ children }) => <ol className="list-decimal ml-4 mb-4">{children}</ol>,
	},
	types: {
		imageWithLayout: ImageWithLayout,
		code: ({ value }) => (
			<pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
				<code className={`language-${value.language || 'text'}`}>{value.code}</code>
			</pre>
		),
	},
};

export const PortableTextComponent: React.FC<PortableTextComponentProps> = ({ content }) => {
	return (
		<div className="clearfix">
			<PortableText value={content} components={components} />
		</div>
	);
};

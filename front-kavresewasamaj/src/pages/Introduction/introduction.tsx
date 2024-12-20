import { useEffect, useState } from 'react';

import { PageService } from '../../sanity/services/pageService';
import { PortableTextComponent } from '../../components/portableTextComponent';

export default function Introduction() {
	const [content, setContent] = useState([]);

	useEffect(() => {
		const loadPageData = async () => {
			try {
				const res = await PageService.fetchPageByDocument('introduction-page');
				console.log(res);

				setContent(res.content);
			} catch (err) {
				console.log(err);
			}
		};

		loadPageData();
	}, []);

	return <PortableTextComponent content={content} />;
}

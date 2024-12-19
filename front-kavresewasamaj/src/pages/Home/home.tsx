import HeroBlog from '../../components/heroBlog';
import ImageCarousel from '../../components/imageCarousel';

export default function Home() {
	return (
		<div className="max-w-screen-xl mx-auto">
			<ImageCarousel />
			<HeroBlog />
		</div>
	);
}

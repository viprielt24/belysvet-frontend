import Animation from './animation';

export default class ScrollToTop extends Animation {
	constructor() {
		super();
		addEventListener( 'scrollToTop', event => {
			this.scroll();
		});
	}

	scroll(){

		const start = Date.now();
		const scroll = window.pageYOffset;
		const duration = scroll/2000 * 1000;

		const blockScroll = event => {
			event.preventDefault();
		};
		addEventListener( 'mousewheel', blockScroll);

		const animate = () => {
			const progress = this.__progress(start, duration);

			window.scrollTo(0, scroll * (1 - progress));

			if (progress === 1) {
				removeEventListener( 'mousewheel', blockScroll);
				return;
			}
			requestAnimationFrame(animate);
		}

		requestAnimationFrame(animate);
	}
}

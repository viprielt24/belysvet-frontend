'use strict';
// version 0.0.0
export default class MouseLeave {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback;

		this.Listener();
	}

	Listener() {
		this.element.addEventListener('mouseleave',this.callback);
	}
	end() {
		this.element.removeEventListener('mouseleave',this.callback);
	}
}

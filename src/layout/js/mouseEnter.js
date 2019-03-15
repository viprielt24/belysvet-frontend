'use strict';
// version 0.0.0
export default class MouseEnter {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback;

		this.Listener();
	}

	Listener() {
		this.element.addEventListener('mouseenter',this.callback);
	}
	end() {
		this.element.removeEventListener('mouseenter',this.callback);
	}
}

// version 0.0.0
export default class Click {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback;
		this.parent = options.parent || null;

		this.Listener();
	}

	Listener() {
		this.element.addEventListener('click',this.callback);
	}

	end() {
		this.element.removeEventListener('click',this.callback);
	}
}

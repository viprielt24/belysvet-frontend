// version 0.0.0
export default class {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback;
		this.listener = options.listener;
		this.parent = options.parent || null;

		this.Listener();
	}

	Listener() {
		this.element.addEventListener(this.listener,this.callback);
	}

	end() {
		this.element.removeEventListener(this.listener,this.callback);
	}
}

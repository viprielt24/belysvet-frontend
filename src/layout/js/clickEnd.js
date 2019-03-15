'use strict';
// version 0.0.0
export default class ClickEnd {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback;

		this.Listener();
	}

	typeOfEvent() {
		let event;
		switch (null) {
			case (window.ontouchend):
				event = 'touchend';
				break;
			case (window.onmouseup):
				event = 'mouseup';
				break;
			default: throw new Error('Никакого события click нету');
		}
		return event;
	}
	Listener() {
		this.element.addEventListener(this.typeOfEvent(),this.callback);
	}

	end() {
		this.element.removeEventListener(this.typeOfEvent(),this.callback);
	}
}

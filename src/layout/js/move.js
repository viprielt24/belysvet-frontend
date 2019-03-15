'use strict';
// version 0.0.0
export default class Move {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback;

		this.eventEnd;
		this.Listener();
	}

	typeOfEvent() {
		let event;
		switch (null) {
			case (window.ontouchmove):
				event = 'touchmove';
				break;
			case (window.onmousemove):
				event = 'mousemove';
				break;
			default:
				throw new Error('Никакого события move нету');
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

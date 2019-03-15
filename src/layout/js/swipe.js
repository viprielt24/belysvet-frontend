'use strict';
// version 0.1.0
import ClickStart from './ClickStart';
import ClickEnd from './ClickEnd';
import Move from './Move';

export default class Swipe {
	constructor(options) {
		this.element = options.element || window;
		this.startElement = options.startElement || this.element;
		this.callbackStart = options.callbackStart || function(){};
		this.callbackMove = options.callbackMove;
		this.callbackEnd = options.callbackEnd;
		options.callback.call(this);

		this.Listener();
	}

	Listener() {
		this.a = new ClickStart({
			element: this.startElement,
			callback: (eventStart) => {

				this.eventStart = eventStart;

				this.b = new Move({
					callback:(eventMove) => {
						this.eventMove = eventMove;
						this.callbackMove(eventMove);
					}
				});

				this.c = new ClickEnd({
					callback:(eventEnd)=>{
						this.eventEnd = eventEnd;

						this.callbackEnd(eventEnd);
						this.badSwipe();
					}
				});

				this.callbackStart(eventStart);
			}
		});
	}

	badSwipe() {
		this.b.end();
		this.c.end();
	}
}

import TransitionEnd from './transitionEnd';

export default class {
	// передается элемент который показывается/скрывается и элементы, которые надо закрыть параметром "высота"
	constructor(bgElement, parents, parameter, transitionendCallback) {
		this.el = bgElement;
		this.parents = parents || this.el;
		this.parameter = parameter;
		this[this.parameter] = {
			init: parseInt(getComputedStyle(this.el)[this.parameter])
		}
		if (transitionendCallback)
			this.transitionEnd = new TransitionEnd({
				element: this.el,
				callback: transitionendCallback
			})

		this.__animationCount = 0;
	}

	show(){

		this.__showing = true;

		this[this.parameter].start = parseInt(getComputedStyle(this.el)[this.parameter]) || 0;
		this.el.style[this.parameter] = this[this.parameter].start + 'px';

		let animationNumber = this.__animationCount++;
		this.el.style['transition'] = 'height .3s ease';

		requestAnimationFrame( () => {
			requestAnimationFrame( () => {
				let menuHeight = 0;

				if (this.parents instanceof Array)
					if ( this.parents.length == 1) {
						menuHeight = parseInt( getComputedStyle(this.parents[0])[this.parameter]);
					} else {
						this.parents.forEach( item => {
							let value = parseInt( getComputedStyle(item)[this.parameter] )

							if (value !== value) return;
							menuHeight += value;
						});
					}
				else {
					menuHeight = parseInt( getComputedStyle(this.parents)[this.parameter]);
				}

				this.el.style[this.parameter] = menuHeight + 'px';

			});
		});
	}
	hide(){
		this.__hiding = true;

		this.el.style['transition'] = 'height .3s ease .2s';

		if (!this.__showing && !this.__showed) return;
		requestAnimationFrame( () => {
			requestAnimationFrame( () => {

				this.el.style[this.parameter] = '0px';
			});
		});
	}
	removeCallback(){
		this.transitionEnd && this.transitionEnd.end();
	}
}

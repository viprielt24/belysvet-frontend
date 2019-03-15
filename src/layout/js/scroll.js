export default class Scrollbar {
	constructor(element,options = {}){
		this.__el = element;
		this.__el.style.marginRight = '-70px';
		this.__el.style.paddingRight = '70px';
		this.__el.parentNode.style.overflow = 'hidden';

		this.scrollStyle = options.scrollStyle;

		this.scrollHeight = this.__el.scrollHeight;
		this.height = this.__el.offsetHeight;
		this.generateBar();
		this.barStyles();
		this.listener();
		this.generateContainer();
	}

	generateBar(){
		this.scrollContainer = document.createElement('div');
		this.scrollPanel = document.createElement('div');
		this.scrollContainer.appendChild(this.scrollPanel);

		this.__el.parentNode.append(this.scrollContainer);
	}

	generateContainer(){

		// console.log(this.__el.childNodes);
	}

	barStyles(){
		let cSty = this.scrollContainer.style;
		let pSty = this.scrollPanel.style;

		cSty.position = 'absolute';
		cSty.right = 0;
		cSty.top = 0;
		cSty.width = '10px';
		cSty.height = '100%';
		cSty.background = '';

		pSty.position = 'absolute';
		if (!this.scrollStyle){
			pSty.width = '5px';
			pSty.right = 1;
			pSty.background = 'linear-gradient(180deg,#83eb67,#0ca480)';
		} else {
			for (var parameter in this.scrollStyle) {
				pSty[parameter] = this.scrollStyle[parameter];
			}
		}


		this.setScroll()

	}

	listener(){
		this.__el.addEventListener('scroll',()=>{
			this.setScroll();
		});

		this.__el.addEventListener( 'setScrollOnMap', event => {
			this.setScroll();
		});

		addEventListener( 'resize', event => {
			this.setScroll();
		});

	}

	setScroll(){

		this.scrollHeight = this.__el.scrollHeight;
		this.height = parseInt(getComputedStyle(this.__el).height);
		let height = this.height/this.scrollHeight * 100;
		let top = this.__el.scrollTop/this.scrollHeight * 100;
		if (height == 100 ) height = 0;
		this.scrollPanel.style.height = height + '%';

		this.scrollPanel.style.top = top + '%';

	}

}

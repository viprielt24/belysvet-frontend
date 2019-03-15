+function(){

	function checkClass() {
		eval('"use strict"; class foo {}');
	}
	function checkArrowFN() {
		eval('"use strict"; const a = () => {};');
	}
	function checkDestruct() {
		eval('"use strict"; const [a,b] = [1,0];');
	}

	function checkDestruct() {
		eval('"use strict"; const [a,b] = [1,0];');
	}

	function checkCssVariable() {
		var style = document.createElement('style');
		style.innerText = ':root{--test:1px;}';
		document.documentElement.appendChild(style);
		var computed = getComputedStyle(document.body);
		var res = computed.getPropertyValue('--test');

		if (!res) throw new Error('Нету поддержки переменных');
	}

	var tryCatchSupport = 0;
	try {
		tryCatchSupport = 1;
		checkClass();
		checkArrowFN();
		checkDestruct();
		checkCssVariable();

	} catch (e) {
		var div = document.createElement('div');
		var divSty = div.style;
		divSty.position = 'fixed';
		divSty.width = '100%';
		divSty.height = '100%';
		divSty.bottom = '0%';
		divSty.left = '0%';
		divSty.background = 'rgba(0,0,0,.8)';
		divSty.zIndex = '9999999999';
		divSty.padding = '30px';
		divSty.color = '#fff';

		var message = document.createElement('div');
		message.classList.add('container');
		var mesSty = message.style;
		mesSty.background = '#3968aa';
		mesSty.padding = '30px 60px 0';
		mesSty.top = '50%';
		mesSty.left = '50%';
		mesSty.position = 'absolute';
		mesSty.transform = 'translate(-50%, -50%)';
		mesSty.maxWidth = '1200px';

		var h1 = document.createElement('div');
		h1.style.fontSize = '24px';
		h1.innerText = 'Версия вашего браузера устарела';
		message.appendChild(h1);

		var p1 = document.createElement('div');
		p1.appendChild( document.createElement('br') );
		p1.appendChild( document.createTextNode('Для корректного отображения сайта Olin Group www.olingroup.ru рекомендуем использовать браузеры:') )
		message.appendChild(p1);

		var ul = document.createElement('ul');
		ul.style.margin = '20px 0 25px';
		message.appendChild(ul);
		var browsers = [{
			image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAI9UExURUdwTN9dSt9USOFYTv+nABeZWsSTQ9tQQdpNPdtQRP7JP95YS/vIQOOeOh2iYhmbW91cVRefWxadWxadW/fGPt5YTd9VStRRQ/OtORWqVf/MRP3KQPvGP/nJPR2bXe2nOfzOQCiSSfvBPxOcWe/EQvnIQN9cUfDBNvXHQvzKQPzJQPnHPhihXt5ZTP7LQRqaWBqgX+BcUtxNQNNYTNxMQfaxPdlRP9xMQBuiYNFWSclMPiqnbTGlaeBbUSSlZuBnWd5bUyWnaf7MQSOkZOijOeW4OuCkU+bDnRyqcRWbWPnIQBSbWfzKQDmTT/DCPUuL9f/NQd1PQ//ORP/OQhqiYRihX//OQ06N9RSfXN1NQR2jYhagXd5RRd5TR91LP0mK9BegXkqK9B+kYyGkZN5USP3EPvzAPZu99P7MQdhQRNBMPtNNQBSPUhObWROVVdxJPP7LQ/7KQf7HQdZPQqbE8+Pr6OTp8vHt5uvY0+KinN1TR/Pitf/NQ9tSRvq8PPfbk7vQ8uHn8pG39NloXkWOW6NXQMpJO4HIps5KPezq7MBGOf3OR7TZx9pUSN/m8iePVlWR9a/J8+uvO/Dw8O/i4cVIOo609Iix9M3b865LOr5ENj2WV/LmwuOrp8va83HCm/zQVOnu7odkSCmoapW59N7FS4CoT8Lg0uvTfufFh/O2PMu/TZO49PLNgW2iUHC2lPnJVxiZWoezg9Tf8zWqcaHEqzCbYOjSz1WDVXFyTunHSKW0TfTLRra6Sk2dUeYf9bgAAABPdFJOUwAS6DABKQr8/P+1eyf+XEUl4NmCa0WC8P4MD+pvFSP+RgMa9FzQoSEy39978+7XOnaV71fw537D0U3kMZxi9DlliN3U/k/+/glux8nuWkPFZqIMAAACKElEQVQoz5XT51/aQBwGcEShrUhx71HU7r333jNJCQSQURJLIiBi2Sjaj3tv6+ree+/1t/VGqIi+0Oft9/Pc5XK/k0gWH/nRY4pcxeHklAU1fbvUbKIoykBJFenzNGlNtdlsgk4ZDAYqN2ku52yujneLRZoczzvzoglu2ZUzy/vzvDWRBK/bEVtBLT/gcHqjkQSv2xv7hkPtHQ5nTRSwaUX/MpTlMHvwQQ8eaevpcoAdIq13QmOhs2eUSuWpsrL8/N3lyI9z3MPxLqe3P9x9l5/gJ4MvRkZeNjXZ7fZiyOdOctzM1LjDGQ7cYhiGGHo9+sZuvw6TCjeQcSA/pjtauxETBNMSfH8DpL6+qAS4imU57utUT3iSwU4wgWaPx9PYqNOkAV9pNLIs+306xItssw43XAXR6TSrsIOw7WMTSAmbzeq7jVyjOf3fjW3f+BhbbzbgOgn7KpqmjUaa/vJpSGQi0IzrAty/lAYI8tn/WGRf8D6unygEXrCPxul80MJYIY8+R3WSROeXbNNqaVoLcs8/4OOHB/wfe9HqJJmN/m/pJq2YR519z/reDb4SeUshvr8saNdgqrT0B9fbXszCRvF+CzIxwujdg090iMlUeWx+ZBlVOHp9respbpMb0mYHbGsGNJBa98xPpOT6dfEDKsvUY3f9ggcjhdVr5w64OqsC1f/+huWibPm8FyI7f7HC7fojCJcuFJcs+MLUMtXlysor5SlLeLP/AEPG5kvbc6PpAAAAAElFTkSuQmCC',
			text: 'Google Chrome версии 60 и выше'
		},{
			image: 'data:image/png;base64,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',
			text: 'Apple Safari версии 10 и выше'
		},{
			image: 'data:image/png;base64,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',
			text: 'Mozilla Firefox версии 55 и выше'
		},{
			image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAINUExURUdwTLEMEv8tQP9KSv8aLP8YLP8bLNMfH+gvMqAAE/5KSu4SKvpGR/MWKfEXKcQdHf8bLe0XJcQWHv8aLes/P/sXKtQgJP8ZLf8aLP9HR+gxPKkHCP9KSv9KStwQH/8aK/VBRPcZKakED/1JSrgIDJ8QEP8aLv9DQ/8bLv8bLugXKPoZK/8bMf9AQP8fKbAODvsaK88LH6kLC7wWFvcXK8IGGroFGd4QIf9OTvwaLMgKHeYSJ/8bKtEJIMkKG9wRI/4aLbwYGOsVJ9UPIcEIG84kJP9JSbsGF7MTE+sUKa8ODuESJfoaKuESJNUNIP9LS9owMMchIbYTE/9MTP8bLeE1NdcNG+g5ObwYGNgkLvkaK/9LS/9KSrAJDMIcHNAPIbEEFt0qNMkhIfNDQ6cAEPEYKP9KStgQHK8ODtMWJqcAFtQqKrIqKs0mJuc7O9wvL8kQFrEEGKYGBsULEvZBQa8DF6oAFv9LS6IEBMgOFf8bLf8AM6cAFKcAE/5KSssZJ/8ZKsIKEacAFKoGCP8bLP8bLf8aLO86P/8bLqgAFc8XJ+c0OqgAFacFBf8bLf9LS/0aLK8DFuYTJu4+PrgFGaMFBbwYGO8WKPoZK/cZKtYOIesVJ/MXKdwQI+ERJc4MH7YTE8ghIftISPRDQ8cKHc4mJtQrK8AIG6kKCuc5OeE1NdswMMMdHbAODrYHDFnV41cAAACOdFJOUwBOBP7OKP4BDQS4FZ3bwvh3PRncRSEgS1ggCvflVvh/+/6Y+/sQ4BPrrd/ULxAZfrz1jxe5T78vF+P9SGA4S2z4w/HP6lRsLTaK/ebGuNek+Krz3vTtE/GBadDyYG5TqcHxqfAg6Ni978Nd/E/nK0FyiSj8O+056uPzcQXAg6/8PPrJ3rKNitPwrfr5zjE5PK/WAAABdUlEQVQYGa3A43ozQQAF4BPuJrVNfLZt27Zt1hZma9u+xs6ZJulun/7si9UUE59WUZlbnIeVuMKjxKLq8jgNy+jhtwRlpJZkz2f/fBsBC5dTUMb/sn9tStJjD5ZsWiPo9bcfOTkNmUmTtEODX1CUoAexUGzv5qQLW+G3XtC6GPjYBunGOSyKcwvJHY+Ae+103APFKcipIWBn2KwU9gTkcgs6BJPrQ/QClNZIx7bA5PQYfdYhbWuk/XaYRI7Tx1hIGzvpEiyuzdBXSBu6aBcsbk/TJ0ghvRQKi7tTFA0ptINCNJjoLcoXSOd76EQQTKJH6KUOKaJZOQiT4GHyQrnYT5c1BGjJBj2CcrSPUvci4IxBN/dB8Zzspit34JPw0JAcKfA5vH2AnupQEt4YdNUOvyMHRun9LzuQmPLXIO9mLNl9aoJqqwq9yQ5DcgSvhdnZPa1KUV16lpGV/vx+Iqw027Mmv9/fI7GCVx8y8+tLawr+eLBqFgCTbbeU6aT8bQAAAABJRU5ErkJggg==',
			text: 'Opera версии 48 и выше'
		},{
			image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC6UExURUdwTAB41wBs1wB41gB21AD//wBu1AB41wB22AB41wB41wB7vQB32AB31gB32AB41wB22QB31QB31wB42AB42AB31QB41wB32AB31gB41wB41wB41wB41wB41gB41QB41wB31wB41wB41wB31gB31gB41QB41wB31gB31gB01QB70wB51gB31wB42gB41wB31QBq1QB31wB32AB31wB31QB31wB40wB52AB42QB32AB31wB31QB41gB41xpmtTIAAAA9dFJOUwC/A6s2AQv6NPuwBlEmL/QdGMtixErp8IiOovf+aZRmpe3bObc8253JQw4r2BHSWwi8bXhY4ECeIs9+VuiGZ/1bAAABJUlEQVQYGY3AibaBUAAF0NNNRSqQZ4awzDNv7Pz/b73qhgpr2Xif5gyabXPYrOWKeCQst0TJmO8EMhy3wISfTyRp9Q+m+T0kWB1mGQPcrHyGGp57ULwOpdIYMXFgoHq0BQCRn1CaC0hnku5Y2591hIptSj1ExJr+QGCs7CBVSoysEXF4cQBrtN0jVqVURui0rgD1Blu4mlGqIaTawOZCnnJXQ0p9hBYAmiS7xlWXkomQBpRHfEZB7I9PKYg1+ZSCmMpAwcg6IDZhoJXPshEzGZjhpRYD3h6v1BhSNSSsBG7KDYbUb8TE9MvQcddnpNOu25VNefq7JanjrjLiAx0JVolZOpKsBjN0pCxcplSLSFsevQKlrm/WdTwo2r2+ag5bA2eJN/0DruxZ5B7tdAMAAAAASUVORK5CYII=',
			text: 'Microsoft Edge версии 15 и выше'
		},{
			image: 'data:image/png;base64,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',
			text: 'Yandex.Браузер версии 16 и выше'
		}];

		for (var i = 0; i < browsers.length; i++) {
			var li = document.createElement('li');
			li.style.marginBottom = '15px';
			var img = document.createElement('img');
			img.style.position = 'relative';
			img.style.top = '5px';
			img.style.verticalAlign = 'bottom';
			img.style.paddingRight = '10px';
			img.src = browsers[i].image;
			li.appendChild(img);
			li.appendChild( document.createTextNode(browsers[i].text) );
			ul.appendChild(li);
		}

		var p2 = document.createElement('p');
		p2.innerText = 'Olin Group не может гарантировать качество услуг и безопасность ваших данных если вы используете другие браузеры для работы с сайтом www.olingroup.ru';
		message.appendChild(p2);

		var p3 = document.createElement('div');
		p3.innerHTML = 'При использовании других браузеров ваши персональные данные находятся под угрозой. Служба технической поддержки не обрабатывает проблемы, связанные с работой устаревших браузеров и платформ. Скачайте и установите современный браузер, мы рекомендуем <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>';
		message.appendChild(p3);

		var buttonsContainer = document.createElement('div');
		buttonsContainer.style.textAlign = 'center';

		var button = document.createElement('a');
		button.setAttribute('target','_blank');
		button.className = 'button';
		button.setAttribute('href','http://outdatedbrowser.com/ru');
		button.innerText = 'ОБНОВИТЬ';
		button.style.width = '230px';
		button.style.padding = '15px 0';
		button.style.margin = '30px 0';
		button.style.marginRight = '60px';
		button.style.boxShadow = '0px 4px 20px 0 rgba(0,0,0,.2)';
		buttonsContainer.appendChild(button);

		var button1 = document.createElement('div');
		button1.setAttribute('target','_blank');
		button1.className = 'button button--empty-current';
		button1.style.width = '230px';
		button1.style.padding = '15px 0';
		button1.style.margin = '30px 0';
		button1.style.marginLeft = '60px';
		button1.onclick = function(){
			div.parentNode.removeChild(div);
		};
		button1.innerText = 'ИГНОРИРОВАТЬ';
		buttonsContainer.appendChild(button1);

		message.appendChild(buttonsContainer);

		div.appendChild(message);
		document.body.appendChild(div);
	}

	if (!tryCatchSupport) {
		alert('Ваш браузер слишком старый, пожалуйста, обновите его');
	}

}();

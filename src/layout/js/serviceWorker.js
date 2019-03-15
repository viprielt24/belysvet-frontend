
export default class {
	constructor() {
		this.on();
	}

	async on() {

		if ('serviceWorker' in navigator) {
			// Весь код регистрации у нас асинхронный.
			navigator.serviceWorker.register('/serviceWorkerLogic.js')
				.then(() =>  {
					return navigator.serviceWorker.ready
				})
				.catch((err) => console.log(err));


			function unregWorkers() {

				var regs = navigator.serviceWorker.getRegistrations()
				.then(arr => {

					arr.forEach( reg => {
						reg.unregister()
					});

				})

			}
			window.del = unregWorkers;

		}
	}
}

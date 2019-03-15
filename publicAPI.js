module.exports = function(app, pagesJs) {
	// Пример
	// app.get(`/dataForMap`, (req,res) => {
	// 	res.send(require('./webpack/dataForMap'));
	// });
  app.get('/search', (req, res) => {
		const data = [
			'Анастасия Задорожная',
			'Анна Чакветадзе',
			'Павел Санаев',
			'Егор Кончаловский'
		];

		const { term } = req.query;
		const substr = term.trim().toLowerCase();
		const filtered = data.filter(str => str.toLowerCase().includes(substr));

		res.send(JSON.stringify(filtered));
	});

}

var express = require('express');

var router = express.Router();

var items = [
			{ id: 1, desc: 'foo'},
			{ id: 2, desc: 'bar'},
			{ id: 3, desc: 'faz'}
		];
router.get('/', function (req, res) {
	res.render('index', {
		title: 'My App', 
		items: items
	});
});

router.post('/add', function(req, res) {
	var newItem = req.body.item;
	items.push({
		id: items.length + 1,
		desc: newItem
	});
	res.redirect('/');
});

module.exports = router;
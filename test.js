'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.plan(1);

	fn('fixture/google', function (err) {
		t.assert(!err, err);
	});
});

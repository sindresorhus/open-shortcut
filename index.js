'use strict';
var shortcutUrl = require('shortcut-url');
var opn = require('opn');

module.exports = function (filepath, cb) {
	shortcutUrl(filepath, function (err, url) {
		if (err) {
			cb(err);
			return;
		}

		opn(url, {wait: false}, cb);
	});
};

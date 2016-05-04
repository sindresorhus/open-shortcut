'use strict';
const shortcutUrl = require('shortcut-url');
const opn = require('opn');

module.exports = fp => shortcutUrl(fp).then(url => opn(url, {wait: false}));

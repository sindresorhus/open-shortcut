'use strict';
const shortcutUrl = require('shortcut-url');
const open = require('open');

module.exports = async filePath => open(await shortcutUrl(filePath));

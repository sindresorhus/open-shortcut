# open-shortcut [![Build Status](https://travis-ci.org/sindresorhus/open-shortcut.svg?branch=master)](https://travis-ci.org/sindresorhus/open-shortcut)

> Open the URL from a [web shortcut](https://en.wikipedia.org/wiki/File_shortcut) file in the browser


## Install

```
$ npm install --save open-shortcut
```


## Usage

```js
const openShortcut = require('open-shortcut');

openShortcut('google').then(() => {
	console.log('URL opened in the browser');
});
```

In the above example it will look for the following file:

- macOS: `google.webloc`
- Linux: `google.desktop`
- Windows: `google.url`


## API

### openShortcut(filepath)

Returns a Promise for the child process.

#### filepath

Type: `string`

Filepath to the web shortcut.
Leave out the extension for cross-platform compatibility.


## Related

- [open-shortcut-cli](https://github.com/sindresorhus/open-shortcut-cli) - CLI for this module
- [shortcut-url](https://github.com/sindresorhus/shortcut-url) - Get the URL from a [web shortcut](https://en.wikipedia.org/wiki/File_shortcut) file


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

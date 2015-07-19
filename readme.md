# open-shortcut

> Open the URL from a [web shortcut](https://en.wikipedia.org/wiki/File_shortcut) file in the browser


## Install

```
$ npm install --save open-shortcut
```


## Usage

```js
var openShortcut = require('open-shortcut');

openShortcut('google', function (err, url) {
	console.log('URL opened in the browser');
});
```

In the above example it will look for the following file:

- OS X: `google.webloc`
- Linux: `google.desktop`
- Windows: `google.url`


## API

### openShortcut(filepath, [callback])

#### filepath

Type: `string`

Filepath to the web shortcut.  
Leave out the extension for cross-platform compatibility.


## Related

- [open-shortcut-cli](https://github.com/sindresorhus/open-shortcut-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

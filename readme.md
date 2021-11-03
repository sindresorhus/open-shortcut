# open-shortcut

> Open the URL from a [web shortcut](https://en.wikipedia.org/wiki/File_shortcut) file in the browser

## Install

```sh
npm install open-shortcut
```

## Usage

```js
import openShortcut from 'open-shortcut';

await openShortcut('google');
console.log('URL opened in the browser');
```

In the above example it will look for the following file:

- macOS: `google.webloc`
- Linux: `google.desktop`
- Windows: `google.url`

## API

### openShortcut(filePath)

Returns a Promise for the [child process](https://nodejs.org/api/child_process.html#class-childprocess) and resolves when the shortcut has opened.

#### filePath

Type: `string`

The file path to the web shortcut.

Leave out the extension for cross-platform compatibility.

## Related

- [open-shortcut-cli](https://github.com/sindresorhus/open-shortcut-cli) - CLI for this module
- [shortcut-url](https://github.com/sindresorhus/shortcut-url) - Get the URL from a [web shortcut](https://en.wikipedia.org/wiki/File_shortcut) file

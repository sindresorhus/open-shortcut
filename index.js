import shortcutUrl from 'shortcut-url';
import open from 'open';

export default async function openShortcut(filePath) {
	return open(await shortcutUrl(filePath));
}

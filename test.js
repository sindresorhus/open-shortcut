import test from 'ava';
import openShortcut from '.';

test('main', async t => {
	const [command, firstArgument] = (await openShortcut('fixture/google')).spawnargs;
	t.regex(command, /open$/);
	t.is(firstArgument, 'https://google.com');
});

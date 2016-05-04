import test from 'ava';
import m from './';

test(async t => {
	const [cmd, arg] = (await m('fixture/google')).spawnargs;
	t.regex(cmd, /open$/);
	t.is(arg, 'https://google.com');
});

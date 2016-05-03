import test from 'ava';
import m from './';

test(async t => {
	const cp = await m('fixture/google');
	t.deepEqual(cp.spawnargs, ['open', 'https://google.com']);
});

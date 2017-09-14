const isMeaningful = what =>
	what
	? Object.values(what).filter(value => value !== undefined).length > 0
	: false;

const which = (what, list) =>
	isMeaningful(what)
	? list
		.filter(item =>
			Object.keys(what).reduce((pass, key) =>
				pass && (what[key] === undefined || item[key] === what[key]),
			true))
		.pop()
	: null;

const where = (what, list) =>
	isMeaningful(what)
	? list.filter(item =>
		Object.keys(what).reduce((pass, key) =>
			pass && (what[key] === undefined || item[key] === what[key]),
		true))
	: list.slice();

const any = (what, list) =>
	isMeaningful(what)
	? list.filter(item =>
		Object.keys(what).reduce((pass, key) =>
			(pass || (what[key] !== undefined && item[key] === what[key])),
		false))
	: list.slice();

export {
	which,
	where,
	any,
};

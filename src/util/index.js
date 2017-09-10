const where = (what, list) =>
	list.filter(item =>
		Object.keys(what).reduce((pass, key) =>
			pass && item[key] === what[key], true));

export {
	where,
};

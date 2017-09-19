const mountPoint = process.env.NODE_ENV === 'production' ? '/github_search' : '';

export {
// eslint-disable-next-line import/prefer-default-export
	mountPoint,
};

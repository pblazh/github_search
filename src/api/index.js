/* global fetch */

const normalizeResponse = response =>
	response.items.map((item) => {
		const {
			id,
			full_name: name,
			html_url: url,
			created_at: createdAt,
			updated_at: updatedAt,
			description,
			language,
			score,
			owner: {
				id: ownerId,
				login: ownerName,
			},
		} = item;
		return {
			id, name, url, description, language, score, createdAt, updatedAt, ownerId, ownerName,
		};
	});

const isOK = response => (
	response.status === 200 ? response : Promise.reject(`Request status: ${response.status}`)
);

function searchRequest(what) {
	if (!what.q) {
		return Promise.reject('Impropper request');
	}
	const request = `q=${what.q}`;
	const params = Object.keys(what)
		.filter(key => what[key])
		.filter(key => key !== 'q')
		.map(key => `+${key}:${what[key]}`)
		.join('');

	return fetch(`https://api.github.com/search/repositories?sort=stars&${request}${params}`)
		.then(isOK)
		.then(response => response.json())
		.then(normalizeResponse);
}

function infoRequest(what) {
	return fetch(`https://api.github.com/repos${what}`)
		.then(isOK)
		.then(response => response.json())
		.then(response => ({ items: [response] }))
		.then(normalizeResponse);
}

export {
	searchRequest,
	infoRequest,
};

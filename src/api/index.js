// const searchResponse = require('../data/response.json');

const normalizeResponce = response =>
	response.items.map(item => {
		const {
			id,
			full_name: name,
			html_url: url,
			description,
			owner: {
				id: ownerId,
				login: ownerName
			}
		} = item;
		return {id, name, url, description, ownerId, ownerName};
	});

function searchRequest(what){
	return fetch('https://api.github.com/search/repositories?sort=stars&q=' + what)
	.then(responce => responce.json())
	.then(normalizeResponce);
}

export {searchRequest};

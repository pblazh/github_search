function request(what){
	console.log( 'request ->', what);
	return new Promise(function(resolve, reject){
		setTimeout(() => resolve(what + ' done'), 3000);
	});

}

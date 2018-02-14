function findIndeces(str) {
	str = str.split(' ').join('');
	var indeces = {};
	for(var i = 0; i < str.length; i++) {
		if(indeces[str.charAt(i)] === undefined) {
			indeces[str.charAt(i)] = [i];
		} 
		else {
			indeces[str.charAt(i)].push(i);
		}
	}
	return indeces;
}

console.log(findIndeces("lighthouse in the house"));
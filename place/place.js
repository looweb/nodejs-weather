const axios = require('axios');

const getLngLat = async (address) => {

	let encodedUrl = encodeURI(address);

	let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);
	
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('No hay resultados para su búsqueda');
		return;
	}

	const addressData = response.data.results[0];
	const { location } = addressData.geometry;

	return {
		address: addressData.formatted_address,
		lat: location.lat,
		lng: location.lng
	}
}

module.exports = {
	getLngLat
}




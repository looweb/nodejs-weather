const axios = require('axios');

const getWeather = async (lat, lng) => {
	const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5bc8b49ab745089f84696a86322607e0
`)

	if (!response.data.main) {
		throw new Error('No se han obtenido resultados para su solicitud');
		return;
	}

	return {
		temp: response.data.main.temp
	}
}

module.exports = {
	getWeather
}
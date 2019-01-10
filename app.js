const colors = require('colors');
const place = require('./place/place');
const weather = require('./weather/weather');

const { argv } = require('yargs')
	.options({
		direccion: {
			alias: 'd',
			desc: 'Dirección de la ciudad de la que se quiere saber el clima',
			demand: true,
		}
	});

	const getInfo = async (address) => {

		try {
			let coors = await place.getLngLat(address);
			let temp = await weather.getWeather(coors.lat, coors.lng);

			return `La temperatura en ${coors.address} es de ${temp.temp}°C`;
		} catch(e) {
			return `No se pudo determinar el clima en ${address}`;
		}
		
	}

	getInfo(argv.direccion)
		.then(message => console.log(message))
		.catch( e => console.log(e));





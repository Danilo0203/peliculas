import { fetchGeneros } from './fetchGeneros';
import { obtenerNombreGenero } from './obtenerGenero';
export const fetchPopulares = async (filtro = 'movie') => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWUxZGMxNTdiYzc3MjcyZjNmOGRmOTI0ZWM2MzkxYyIsInN1YiI6IjY1MzQ5OTU1YzhhNWFjMDBjNTA5ZWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4VaA9gpJHbB-9iGPDGRpV_7FHV0Gbb8asHtcS_JIpA',
		},
	};
	if (filtro === 'movie') {
		const url = import.meta.env.VITE_URL;
		try {
			const respuesta = await fetch(url, options);
			const datos = await respuesta.json();
			const resultados = datos.results;
			const generos = await fetchGeneros(filtro);
			resultados.forEach((resultado) => {
				const { genre_ids } = resultado;
				const id = genre_ids[0];
				resultado.genero = obtenerNombreGenero(id, generos);
			});
			return resultados;
		} catch (error) {
			console.log(error);
		}
	} else {
		const url = import.meta.env.VITE_SERIES;
		try {
			const respuesta = await fetch(url, options);
			const datos = await respuesta.json();
			const resultados = datos.results;
			const generos = await fetchGeneros(filtro);
			resultados.forEach((resultado) => {
				const { genre_ids } = resultado;
				const id = genre_ids[0];
				resultado.genero = obtenerNombreGenero(id, generos);
			});
			return resultados;
		} catch (error) {
			console.log(error);
		}
	}
};
// fetchPopulares();

import { fetchGeneros } from './fetchGeneros';
import { obtenerNombreGenero } from './obtenerGenero';

export const fetchBusquedad = async (pagina = 1) => {
	const añoActual = new Date();
	const tipo = document.querySelector('.main__filtros .btn--active')?.id;
	const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
	const añoInicial = document.querySelector('#años-min').value || 1950;
	const añoFinal = document.querySelector('#años-max').value || añoActual.getFullYear();
	let url;
	if (tipo === 'movie') {
		url = `https://api.themoviedb.org/3/discover/movie?api_key=85e1dc157bc77272f3f8df924ec6391c&include_adult=true&include_video=false&language=es-MEX&page=${pagina}&primary_release_date.gte=${añoInicial}&primary_release_date.lte=${añoFinal}&sort_by=popularity.desc&with_genres=${idGenero}`;
	} else if (tipo === 'tv') {
		url = `https://api.themoviedb.org/3/discover/tv?api_key=85e1dc157bc77272f3f8df924ec6391c&first_air_date.gte=${añoInicial}&first_air_date.lte=${añoFinal}&include_adult=true&include_null_first_air_dates=false&language=es-MEX&page=${pagina}&sort_by=popularity.desc&with_genres=${idGenero}`;
	}
	try {
		const respuesta = await fetch(url);
		const datos = await respuesta.json();
		const resultados = datos.results;
		const generos = await fetchGeneros(tipo);
		resultados.forEach((resultado) => {
			const { genre_ids } = resultado;
			const id = genre_ids[0];
			resultado.genero = obtenerNombreGenero(id, generos);
		});
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

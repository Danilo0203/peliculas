import { cargarGeneros } from '../cargarInfo/cargarGeneros';
import { cargarTitulos } from '../cargarInfo/cargarTitulos';
import { fetchPopulares } from '../peticiones/fetchPopulares';

const filtroPelicula = document.getElementById('movie');
const filtroSeries = document.getElementById('tv');
filtroPelicula.addEventListener('click', async (e) => {
	e.preventDefault();
	cargarGeneros('movie');
	const resultados = await fetchPopulares('movie');
	cargarTitulos(resultados);
	filtroPelicula.classList.add('btn--active');
	filtroSeries.classList.remove('btn--active');
});
filtroSeries.addEventListener('click', async (e) => {
	e.preventDefault();
	cargarGeneros('series');
	const resultados = await fetchPopulares('series');
	cargarTitulos(resultados);
	filtroPelicula.classList.remove('btn--active');
	filtroSeries.classList.add('btn--active');
});

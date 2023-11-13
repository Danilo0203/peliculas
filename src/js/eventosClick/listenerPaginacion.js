import { cargarTitulos } from '../cargarInfo/cargarTitulos';
import { fetchBusquedad } from '../peticiones/fetchBusquedad';

const anterior = document.getElementById('pagina-anterior');
const siguiente = document.getElementById('pagina-siguiente');

siguiente.addEventListener('click', async (e) => {
	const paginaActual = document.getElementById('populares').dataset.pagina;
	try {
		const resultados = await fetchBusquedad(paginaActual + 1);
		document.getElementById('populares').setAttribute('data-pagina', parseInt(paginaActual) + 1);
		cargarTitulos(resultados);
		window.scrollTo(0, 0);
	} catch (error) {
		console.log(error);
	}
});
anterior.addEventListener('click', async (e) => {
	const paginaActual = document.getElementById('populares').dataset.pagina;
	if (paginaActual > 1) {
		try {
			const resultados = await fetchBusquedad(paginaActual - 1);
			document.getElementById('populares').setAttribute('data-pagina', parseInt(paginaActual) - 1);
			cargarTitulos(resultados);
			window.scrollTo(0, 0);
		} catch (error) {
			console.log(error);
		}
	}
});

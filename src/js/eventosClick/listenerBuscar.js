import { cargarTitulos } from '../cargarInfo/cargarTitulos';
import { fetchBusquedad } from '../peticiones/fetchBusquedad';

const btnBuscar = document.getElementById('btn-buscar');
btnBuscar.addEventListener('click', async (e) => {
	e.preventDefault();
	const resultados = await fetchBusquedad();
	cargarTitulos(resultados);
});

import { cargarGeneros } from './cargarInfo/cargarGeneros';
import { cargarTitulos } from './cargarInfo/cargarTitulos';
import { fetchPopulares } from './peticiones/fetchPopulares';
import './eventosClick/listenerFiltroTipo';
import './eventosClick/listenerFiltroGenero';
import './eventosClick/listenerBuscar';
import './eventosClick/listenerPaginacion';
import './eventosClick/listenerItems';
import './eventosClick/listenerPopup';

(() => {
	const cargar = async () => {
		const resultadosPopulares = await fetchPopulares();
		cargarTitulos(resultadosPopulares);
		cargarGeneros('movie');
	};
	cargar();
})();

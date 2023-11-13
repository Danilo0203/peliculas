export const obtenerNombreGenero = (id, generos) => {
	let nombreGenero = generos.find((item) => item.id === id);
	return nombreGenero?.name || 'Not found gender';
};

export const fetchItem = async (id) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWUxZGMxNTdiYzc3MjcyZjNmOGRmOTI0ZWM2MzkxYyIsInN1YiI6IjY1MzQ5OTU1YzhhNWFjMDBjNTA5ZWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4VaA9gpJHbB-9iGPDGRpV_7FHV0Gbb8asHtcS_JIpA',
		},
	};
	const tipo = document.querySelector('.main__filtros .btn--active').id;
	try {
		const url = `https://api.themoviedb.org/3/${tipo}/${id}?language=es-MEX'`;
		const respuesta = await fetch(url, options);
		const datos = await respuesta.json();
        console.log(datos);
		return datos;
	} catch (error) {
		console.log(error);
	}
};

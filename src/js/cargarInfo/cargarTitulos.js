export const cargarTitulos = (resultados) => {
	const contenedor = document.querySelector('#populares .main__grid');
	contenedor.innerHTML = '';
	resultados.forEach((resultado) => {
		const { title, poster_path, release_date, genero, name, first_air_date, id } = resultado;
		const año = new Date((resultado = release_date ? release_date : first_air_date));
		const plantilla = ` 
    <div class="main__media" data-id="${id}">
        <a href="#" class="main__media-thumb">
            <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${(resultado = name ? name : title)}" />
        </a>
        <p class="main__media-titulo">${(resultado = name ? name : title)}</p>
        <p class="main__media-fecha">${genero}</p>
        <p class="main__media-fecha">${año.getFullYear()}</p>
    </div>`;
		contenedor.insertAdjacentHTML('beforeend', plantilla);
	});
};

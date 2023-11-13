const contenedor = document.getElementById('filtro-generos');
contenedor.addEventListener('click', (e) => {
	e.preventDefault();
	const btn = document.querySelector('.btn');
	if (e.target.closest('button')) {
		// Seleccionamos el boton que tenga la clase .btn--active y el boton que
		// tenga la clase se elimina
		contenedor.querySelector('.btn--active')?.classList.remove('btn--active');
		//Agregamos la clase active el boton que clickamos
		e.target.classList.add('btn--active');
	}
});

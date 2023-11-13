import { fetchGeneros } from '../peticiones/fetchGeneros';
export const cargarGeneros = async (filtro) => {
	const contenedor = document.getElementById('filtro-generos');
	const generos = await fetchGeneros(filtro);
	contenedor.innerHTML = '';
	generos.forEach(({ name, id }) => {
		const btn = document.createElement('button');
		btn.classList.add('btn');
		btn.innerText = name;
		btn.setAttribute('data-id', id);
		contenedor.appendChild(btn);
	});
};

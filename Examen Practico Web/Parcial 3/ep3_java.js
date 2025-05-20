const listaTareas = document.getElementById('r1');
const tareaForm = document.getElementById('forms');
const nuevaTareaInput = document.getElementById('tarea');

tareaForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const texto = nuevaTareaInput.value.trim();

	if (texto !== '') {
		const tareaDiv = document.createElement('div');
		tareaDiv.className = 'tarea';

		const span = document.createElement('span');
		span.textContent = texto;

		const button = document.createElement('button');
		button.textContent = 'Eliminar';
		button.onclick = () => tareaDiv.remove();

		tareaDiv.appendChild(span);
		tareaDiv.appendChild(button);

		listaTareas.appendChild(tareaDiv);

				nuevaTareaInput.value = '';
			}
	});
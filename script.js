const editBtn = document.querySelector('.edit-btn');
const saveBtn = document.querySelector('.save-btn');

// Edit button click event
editBtn.addEventListener('click', () => {
	editBtn.style.display = 'none';
	saveBtn.style.display = 'inline-block';
	document.querySelectorAll('.content p').forEach((p) => {
		const text = p.textContent;
		const input = document.createElement('input');
		input.value = text;
		p.replaceWith(input);
	});
});

// Save button click event
saveBtn.addEventListener('click', () => {
	saveBtn.style.display = 'none';
	editBtn.style.display = 'inline-block';
	document.querySelectorAll('.content input').forEach((input) => {
		const text = input.value;
		const p = document.createElement('p');
		p.textContent = text;
		input.replaceWith(p);
	});
});

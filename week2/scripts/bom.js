document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const list = document.getElementById('list');

    button.addEventListener('click', () => {
        const chapter = input.value.trim();

        const li = document.createElement('li');
        li.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    });
});
const Button = document.getElementById('toggle-button');
const body = document.body;

Button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
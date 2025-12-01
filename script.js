const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuButton.innerHTML = isOpen ? '✕' : '☰';
    menuButton.setAttribute('aria-expanded', isOpen);
});

const form = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        messageDiv.textContent = "Please fill all fields.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Thank you! I will contact you soon.";
        messageDiv.style.color = "BLACK";
        form.reset();}
});
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if (menu) {
    menu.addEventListener('click', () => {
        if (navbar) {  // Check if navbar exists
            navbar.classList.add('active');  // Remove the dot
        } else {
            console.error('Element with ID "navbar" not found.');
        }
    });
} else {
    console.error('Element with ID "menu" not found.');
}

if (close) {
    close.addEventListener('click', () => {
        if (navbar) {
            navbar.classList.remove('active');
        } else {
            console.error('Element with ID "navbar" not found.');
        }

    });
}
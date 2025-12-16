document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        nav.classList.remove('active');
        toggle.classList.remove('active');
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    const video = document.querySelector('video');

    // Cuando el audio empieza a reproducirse
    audio.addEventListener('play', () => {
        if (!video.paused) {
            video.pause();
        }
    });

    // Cuando el video empieza a reproducirse
    video.addEventListener('play', () => {
        if (!audio.paused) {
            audio.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LÓGICA DE AUDIO Y VÍDEO (Pausa automática)
    const audio = document.querySelector('audio');
    const video = document.querySelector('video');

    if (audio && video) {
        audio.addEventListener('play', () => {
            if (!video.paused) video.pause();
        });

        video.addEventListener('play', () => {
            if (!audio.paused) audio.pause();
        });
    }

    // 2. LÓGICA DEL FILTRO DE HABILIDADES
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skills = document.querySelectorAll('.skill-pill');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // A) Quitar la clase 'active' de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // B) Añadir la clase 'active' al botón que hemos clicado
            btn.classList.add('active');

            // C) Saber qué categoría queremos filtrar
            const filterValue = btn.getAttribute('data-filter');

            // D) Mostrar u ocultar las píldoras según la categoría
            skills.forEach(skill => {
                if (filterValue === 'all' || skill.getAttribute('data-category') === filterValue) {
                    skill.classList.remove('hide-skill');
                } else {
                    skill.classList.add('hide-skill');
                }
            });
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA)
    // =========================================
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    // Abrir/cerrar menú al pulsar la hamburguesa
    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            mobileMenu.classList.toggle("is-active");
            navLinks.classList.toggle("active");
        });
    }

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            mobileMenu.classList.remove("is-active");
            navLinks.classList.remove("active");
        });
    });

});
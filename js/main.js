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
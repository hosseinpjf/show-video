function random() {
    let number = Math.floor((Math.random() * 20) + 1);
    return number;
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const source = document.getElementById('videoSource');

    source.src =  `./videos/video-${random()}.mp4`;
    video.load();
});

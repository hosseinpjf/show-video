const video = document.querySelector('video');
const source = document.querySelector('source');

function random(){
    let number = Math.floor((Math.random() * 20) + 1);
    return number;
}

document.addEventListener('DOMContentLoaded', () => {
    source.src = `./videos/video-${random()}.mp4`;
    video.load();
})
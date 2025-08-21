const video = document.querySelector('video source');

function random(){
    let number = Math.floor((Math.random() * 20) + 1);
    return number;
}

document.addEventListener('DOMContentLoaded', () => {
    video.src = `./videos/video-${random()}.mp4`;
})
document.querySelector('video source').src = `./videos/video-${random()}.mp4`;

function random(){
    let number = Math.floor((Math.random() * 20) + 1);
    console.log(number);
    return number
}
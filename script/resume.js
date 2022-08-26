let audio = new Audio('./song.mp3');

document.querySelector('.photo2').addEventListener('mouseout', function (e) {
    audio.pause();
})

document.querySelector('.photo2').addEventListener('mouseover', function (e) {
    e.preventDefault()
    audio.play();
    audio.volume = 0.03;
})

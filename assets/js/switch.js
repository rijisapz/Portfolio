const audio = document.getElementById('audio');
const musicSwitch = document.getElementById('music-switch');

musicSwitch.addEventListener('change', function () {
    if (this.checked) {
        audio.play();
    } else {
        audio.pause();
    }
});

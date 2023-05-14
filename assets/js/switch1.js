const audio2 = document.getElementById('audio1');
const musicSwitch2 = document.getElementById('music-switch1');

musicSwitch2.addEventListener('change', function () {
    if (this.checked) {
        audio2.play();
    } else {
        audio2.pause();
    }
});

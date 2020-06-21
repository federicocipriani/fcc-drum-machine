const pads = document.getElementById('pad-container');
const ids = document.querySelectorAll('audio');
const display = document.getElementById('display');

loadEventListener();

function loadEventListener() {

    pads.addEventListener('click', playSoundClick);
    document.addEventListener('keydown', playSoundKeyboard);

}

function playSoundClick(e) {
    let sound = e.target.children[0];
    var playPromise = sound.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
    displaySound(sound);
}

function playSoundKeyboard(e) {
    ids.forEach(item => {
        if (item.id === e.key.toUpperCase()) {
            let sound = document.getElementById(e.key.toUpperCase());
            var playPromise = sound.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                  // Automatic playback started!
                  // Show playing UI.
                })
                .catch(error => {
                  // Auto-play was prevented
                  // Show paused UI.
                });
            }
            displaySound(sound)
        }
    })
}

function displaySound(sound) {
    display.innerText = sound.parentElement.id;
}
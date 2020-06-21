const pads = document.getElementById('pad-container');
const ids = document.querySelectorAll('audio');
const display = document.getElementById('display');

loadEventListener();

function loadEventListener() {

    pads.addEventListener('click', playSoundClick);
    document.addEventListener('keydown', playSoundKeyboard);
    document.addEventListener('keyup', releaseButton);

}

function playSoundClick(e) {
    const button = e.target;
    let sound = button.children[0];
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
    button.classList.add('active');
    setTimeout(releaseButton, 100);
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
            displaySound(sound);
            const button = item.parentElement;
            button.classList.add('active');
        }
    })
}

function displaySound(sound) {
    display.innerText = sound.parentElement.id;
}

function releaseButton() {
    console.log(ids[0].parentElement);
    ids.forEach(item => item.parentElement.classList.remove('active'));
}
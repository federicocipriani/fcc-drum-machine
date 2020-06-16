const pads = document.getElementById('pad-container');

document.addEventListener("keydown", function(e) {
    console.log(e);
    var key = e.key.toUpperCase();
    switch(key) {
        case 'Q':
            document.getElementById(key).play();
            break;
        case 'W':
            document.getElementById(key).play();
            break;
        case 'E':
            document.getElementById(key).play();
            break;
        case 'A':
            document.getElementById(key).play();
            break;
        case 'S':
            document.getElementById(key).play();
            break;
        case 'D':
            document.getElementById(key).play();
            break;
        case 'Z':
            document.getElementById(key).play();
            break;
        case 'X':
            document.getElementById(key).play();
            break;
        case 'C':
            document.getElementById(key).play();
            break;
    }
});

pads.addEventListener('click', (event) => {
    console.log(event.target.lastElementChild.id);
    switch(event.target.lastElementChild.id) {
        case 'Q':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'W':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'E':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'A':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'S':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'D':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'Z':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'X':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
        case 'C':
            document.getElementById(event.target.lastElementChild.id).play();
            break;
    }
});
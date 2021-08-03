'use strict';
let boxTop = 200;
let boxLeft = 200;
let box = document.getElementById("box")
let move = document.querySelector('.move')


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName === 'ArrowDown'){
        boxTop += 10
        box.style.top = boxTop + "px";
        move.setAttribute('src', 'pacmanDown.png')
    }
    if(keyName === 'ArrowUp'){
        boxTop -= 10
        box.style.top = boxTop + "px";
        move.setAttribute('src', 'pacmanUp.png')

    }
    if(keyName === 'ArrowLeft'){
        for(let i=0; i <10; i ++){
        boxLeft--
        box.style.left = boxLeft + "px";
        move.setAttribute('src', 'pacmanLeft.png')
        }
    }
    if(keyName === 'ArrowRight'){
        boxLeft += 10
        box.style.left = boxLeft + "px";
        move.setAttribute('src', 'pacmanRigth.png')

    }
    console.log('keydown event\n\n' + 'key: ' + keyName);
});

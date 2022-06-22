const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var lose = 0;

const jump = () => {
    mario.classList.add('to-jump');
    if (lose == 0) mario.src = 'assets/images/mario-jump.png';

    setTimeout(() => {
        mario.classList.remove('to-jump')
        if (lose == 0) mario.src = 'assets/images/mario.gif';
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 70 && marioPosition <= 75) {
        lose = 1;
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'assets/images/lose.webp';
        mario.style.width = '70px'

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
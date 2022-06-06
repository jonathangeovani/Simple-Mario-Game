const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('to-jump');

    setTimeout(() => {
        mario.classList.remove('to-jump')
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 70 && marioPosition <= 75) {
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
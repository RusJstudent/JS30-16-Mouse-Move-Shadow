'use strict';

const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 300; // px

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(128, 128, 255, 0.7),
    ${yWalk * -1 * 1.5}px ${xWalk * 0.8}px 0 rgba(128, 255, 128, 0.7),
    ${yWalk * 1.2}px ${xWalk * -1 * 1.2}px 0 rgba(255, 128, 128, 0.7),
    ${yWalk * -1 * 0.8}px ${xWalk * -1 * 1.5}px 0 rgba(155, 128, 100, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);
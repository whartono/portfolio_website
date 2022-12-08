/*
We use 'const' for values that don't change. 'Let' is used for values that are to be reassigned. 

Also, delay values are in ms
*/

const typedTextSpan = document.querySelector('.typed-text')
const cursorSpan = document.querySelector('.cursor');
const twText = ['Software Engineer', 'Database Administrator', 'FrontEnd Web Developer', '3D Animator'];
const typingDelay = 200;
const erasingDelay = 100;
const nextStringDelay = 3000;

let twIndex = 0;
let charIndex = 0;


function type() {
    if (charIndex < twText[twIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');

        typedTextSpan.textContent += twText[twIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, nextStringDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');

        typedTextSpan.textContent = twText[twIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        twIndex++;

        if (twIndex >= twText.length) {
            twIndex = 0;
        }

        cursorSpan.classList.remove('typing');
        setTimeout(type, typingDelay + 1100);
    }
}


//Works automatically when the content is loaded
document.addEventListener('DOMContentLoaded', function() {

    setTimeout(type, nextStringDelay+250);
});



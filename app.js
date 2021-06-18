const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');

let missed = 0;

const phrases = [ 
    'drawing is something i enjoy',
    'its really hot today',
    'i want to watch anime',
    'im going to get ice cream',
    'lets go somewhere fun' ];

overlay.addEventListener('click', (e) => {
   if (e.target.className === "btn__reset") {
       overlay.style.display = 'none';
   }
});
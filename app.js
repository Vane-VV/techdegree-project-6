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


// takes in an array of strings and returns an array containing the characters of a random string from the original array
function getRandomPhraseAsArray(array) {
    const number = Math.floor(Math.random() * array.length); // some integer between 0 and array.length - 1
    const phrase = array[number]; 
    const result = phrase.split('');
    return result; //array containing characters, i.e. ['h', 'e', 'l', 'l', 'o']
}

getRandomPhraseAsArray(phrases)

function addPhraseToDisplay(array) {
    for (let i = 0; i < phrases.length; i ++){
        let ul = document.getElementsByTagName('ul')
        let li = document.createElement('li')
        list.textContent = array[i]
        list.appendChild(ul)
    }
}
const qwerty = document.getElementById('qwerty'); //turned the id 'qwerty' into a varriable
const phrase = document.getElementById('phrase'); //turned the id 'phrase' into a varriable
const overlay = document.getElementById('overlay'); //turned the id 'overlay' into a varriable

let missed = 0; //made a variable called missed that = 0

const phrases = [ //these are the arrays I made and gave them the variable name 'constant'
    'drawing is something i enjoy',
    'its really hot today',
    'i want to watch anime',
    'im going to get ice cream',
    'lets go somewhere fun' ];

overlay.addEventListener('click', (e) => { //event listener listens to the start button being clicked and hides overlay
   if (e.target.className === "btn__reset") {
       overlay.style.display = 'none';
   }
});


// takes in an array of strings and returns an array containing the characters of a random string from the original array
function getRandomPhraseAsArray(array) {
    const number = Math.floor(Math.random() * array.length); // gives me some integer between 0 and array.length - 1
    const phrase = array[number]; //gave array and its index the variable name 'phrase'
    const result = phrase.split(''); //causes letters to split 'h', 'e', 'l', 'l', 'o'
    return result; //array containing characters, i.e. ['h', 'e', 'l', 'l', 'o']
}

function addPhraseToDisplay(array) { //targets the array
    let ul = document.querySelector('ul'); //selects the 'ul'
    for (let i = 0; i < array.length; i++){ //loops through arrays
        let li = document.createElement('li'); //creates an 'li' element
        li.textContent = array[i]; //makes the li's text content the arrays
        if (array[i] !== ' ') { //if the letter from array is chosen then make it so the letter is appended
             li.className = 'letter';
        }
        ul.appendChild(li);
    }
}

function checkLetter(btn) { //checks if button pressed is in the array
        let result = null; //returns null if not
        const guessed = btn.textContent; //btn.textContent has the viriable name guessed
        const phraseLetters = document.querySelectorAll('.letter'); //selects all the elements in the letter class and gives them the varible called phraseLetters
    for (let i = 0; i < phraseLetters.length; i++) { //if the length of phraseleters is greater than 0 then add 1
        let letter = phraseLetters[i]; 
        if (guessed === letter.textContent) { //if the guessed leter is correct it will appear onscreen
            letter.classList.add('show');
            result = letter; //gives the result
        }
    }
    return result;
}

function checkWin() {
    const show = document.getElementsByClassName('show');
    const letters = document.getElementsByClassName('letter');
    if (show.length === letters.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
    }
}

function loseHeart()  {
    const scoreboard = document.querySelector('ol');
    // save scoreboard ol in a variable
    scoreboard.removeChild(scoreboard.lastElementChild);
    // remove the last child from the ol
}

qwerty.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.tagName === 'BUTTON') {
        btn.className = 'chosen';
        btn.setAttribute("disabled", "true");
        const letterFound = checkLetter(btn);
        if (!letterFound) {
            missed++;
            loseHeart();
        }
        checkWin();
    }
});

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

const word = ['voltron', 'thundercats', 'transformers', 'jem', 'rainbowbrite'];

let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let underScore = [];
console.log(choosenWord);

let generateUnderScore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderScore());

document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
});   
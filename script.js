// Let's write the javascript code of this project here !
console.log("Welcome To TicTacToe");

// Define variables
let bgmusic = new Audio("music.mp3");
let audioturn = new Audio('ting.mp3');
let gameOver = new Audio("gameover.mp3");
let win = new Audio("win.wav");
let turn = "X";
let isgameOver = false;

//  Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0":"X";  // Using iternary operator
}

//  Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {

        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {

            document.querySelector('.info').innerText = boxText[e[0]].innerText + "'s Won This Game!";

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";

            isgameOver = true;
            win.play();

        }
    })
}

// Game Logic
bgmusic.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

    let boxText = element.querySelector('.boxText');

    element.addEventListener('click', (e) => {
        
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            audioturn.play();
            turn = changeTurn();
            checkWin();
        }
        
        if (!isgameOver) {
            document.getElementsByClassName("info")[0].innerText = "Player " + turn + "'s Turn";
        }

    })
})

// Add on click listener to reset button
reset.addEventListener('click', () => {

    let boxTexts = document.querySelectorAll('.boxText');

    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });

    turn = "X";
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Player " + turn + "'s Turn";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    
})

function togglehide(){
    let rulebtn = document.getElementById('rulebtn');
    let rule = document.getElementById('rule');

    if(rule.style.display === 'none', rulebtn.innerHTML === "Show Rules"){
        rule.style.display = 'block';
        rulebtn.innerHTML = 'Block';
    }
    else{
        rule.style.display = 'none';
        rulebtn.innerHTML = 'Show Rules';
    }
}
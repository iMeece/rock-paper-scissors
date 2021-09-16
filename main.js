function computerPlay() {
    let element = document.getElementById("computer-screen-content");
    const randNumber = Math.floor((Math.random() * 3) + 1);
    if(randNumber === 1) {
        computerPick = "Paper";
        element.classList.add("em");
        element.classList.add("em-raised_hand_with_fingers_splayed");
        element.classList.add("c-paper-icon");
    }
    else if(randNumber === 2) {
        computerPick = "Scissors";
        element.classList.add("em");
        element.classList.add("em-v");
        element.classList.add("c-scissors-icon");
    }
    else {
        computerPick = "Rock";
        element.classList.add("em");
        element.classList.add("em-fist");
        element.classList.add("c-rock-icon");
    }
    comparePicks();
}

function configureGame() {
    rock.addEventListener("click", () => {
        if(playerPick === undefined) {
            playerPick = "Rock";
            computerPlay();
        }
    });

    scissors.addEventListener("click", () => {
        if(playerPick === undefined) {
            playerPick = "Scissors";
            computerPlay();
        }
    });

    paper.addEventListener("click", () => {
        if(playerPick === undefined) {
            playerPick = "Paper";
            computerPlay();
        }
    });
}

function comparePicks() {
    let winner = "Player";
    playerScore += 1;
    if(playerPick === computerPick) {
        document.getElementById("announcer-text").textContent = "It's a draw!";
        playerScore -= 1;
        winner = "Draw";
    }
    else if(playerPick === "Rock" && computerPick === "Scissors") {
        document.getElementById("announcer-text").textContent = "Nice!";
    }
    else if(playerPick === "Scissors" && computerPick === "Paper") {
        document.getElementById("announcer-text").textContent = "Keep Going!";
    }
    else if(playerPick === "Paper" && computerPick === "Rock") {
        document.getElementById("announcer-text").textContent = "Yeah!";
    }
    else {
        document.getElementById("announcer-text").textContent = "Ouch!";
        computerScore += 1;
        playerScore -= 1;
        winner = "Computer";
    }

    updateScore(winner);
}

function updateScore(winner) {
    let element;
    if(winner === "Player") {
        switch(playerScore) {
            case 1:
                element = document.getElementById("p-score-1");
                element.classList.add("player-point");
                break;
            case 2:
                element = document.getElementById("p-score-2");
                element.classList.add("player-point");
                break;
            case 3:
                element = document.getElementById("p-score-3");
                element.classList.add("player-point");
                break;
        }
    }
    else if(winner === "Computer") {
        switch(computerScore) {
            case 1:
                element = document.getElementById("c-score-1");
                element.classList.add("computer-point");
                break;
            case 2:
                element = document.getElementById("c-score-2");
                element.classList.add("computer-point");
                break;
            case 3:
                element = document.getElementById("c-score-3");
                element.classList.add("computer-point");
                break;
        }
    }
    setTimeout(function(){ removeContents(); }, 1000);
}

function removeContents() {
    let element = document.getElementById("computer-screen-content");
    if(computerPick === "Paper") {
        element.classList.remove("em");
        element.classList.remove("em-raised_hand_with_fingers_splayed");
        element.classList.remove("c-paper-icon");
    }
    else if(computerPick === "Scissors") {
        element.classList.remove("em");
        element.classList.remove("em-v");
        element.classList.remove("c-scissors-icon");
    }
    else {
        element.classList.remove("em");
        element.classList.remove("em-fist");
        element.classList.remove("c-rock-icon");
    }

    if(playerScore === 3) {
        document.getElementById("announcer-text").textContent = "You Won!";
        createResetButton();
    }
    else if(computerScore === 3) {
        document.getElementById("announcer-text").textContent = "You Lost!";
        createResetButton();
    }
    else {
        document.getElementById("announcer-text").textContent = "Select Your Hand!";
        playerPick = undefined;
        computerPick = undefined;
    }
}

function createResetButton() {
    let element = document.getElementById("computer-screen-content");
    let button = document.createElement("BUTTON");
    let text = document.createTextNode("Restart Game");
    button.appendChild(text);
    element.appendChild(button);
    button.id = "resetButton";
    button.addEventListener("click", () => {
        restartGame(button);
    });
}

function restartGame(button) {
    playerPick = undefined;
    computerPick = undefined;
    button.remove();
    playerScore = 0;
    computerScore = 0;
    document.getElementById("announcer-text").textContent = "Select Your Hand!"
    removeScore();
}

function removeScore() {
    document.getElementById("p-score-1").classList.remove("player-point");
    document.getElementById("p-score-2").classList.remove("player-point");
    document.getElementById("p-score-3").classList.remove("player-point");
    document.getElementById("c-score-1").classList.remove("computer-point");
    document.getElementById("c-score-2").classList.remove("computer-point");
    document.getElementById("c-score-3").classList.remove("computer-point");
}

let playerScore = 0;
let computerScore = 0;

let playerPick;
let computerPick;

configureGame();

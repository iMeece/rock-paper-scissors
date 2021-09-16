function computerPlay() {
    const randNumber = Math.floor((Math.random() * 3) + 1);
    if(randNumber === 1) {
        return "Paper";
    }
    else if(randNumber === 2) {
        return "Scissors";
    }
    else {
        return "Rock"
    }
}



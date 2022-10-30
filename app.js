let computerChoice = document.querySelector('.computer-choice'),
    userChoice = document.querySelector('.user-choice'),
    result = document.querySelector('.result'),
    rock = document.querySelector('rock'),
    paper = document.querySelector('paper'),
    scissors = document.querySelector('.scissors'),
    btns = document.querySelectorAll('.btn');
    
let gamePlay = ['Rock', 'Paper', 'Scissors'];    

    // PAPER > ROCK
    // PAPER < SCISSORS
    // ROCK > SCISSORS
    // ROCK < PAPER

    btns.forEach((e) => {
      e.addEventListener('click', (a) => {
        let userDecided = a.target.textContent;

        // Here we generate random number and then we acces array to choose what to play
        // this is mean for computer
        let randomChoice = gamePlay[Math.floor(Math.random()*3)];
        
        // Here we take user's choice and append it to display/DOM
        userChoice.textContent = userDecided;
        // Here we take random choice and append it to display/DOM
        computerChoice.textContent = randomChoice;
        
        if(userDecided === randomChoice) {
            result.textContent = 'PLAY AGAIN YOU ARE THE SAME!!';
        }else if(userDecided === 'Rock' && randomChoice === 'Scissors') {
            result.textContent = 'You are the winner!';
        }else if(userDecided === 'Paper' && randomChoice === 'Rock'){
            result.textContent = 'You are the winner!';
        }else if(userDecided === 'Scissors' && randomChoice === 'Paper'){
            result.textContent = 'You are the winner!';
        }else {
            result.textContent = 'Computer won!';
        }

      });
    })
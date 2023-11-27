// Step 1: Get the user’s choice.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    // Check if the user input is valid
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        throw new Error("Error: Please enter 'rock', 'paper', or 'scissors'.");
    }
};

// Test getUserChoice function
try {
    console.log(getUserChoice('Rock')); // Output: rock
    console.log(getUserChoice('pape')); // Throws an error
} catch (error) {
    console.log(error.message);
}

// Step 2: Now we need to have the computer make a choice.
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// Test getComputerChoice function
console.log(getComputerChoice()); // Output: rock, paper, or scissors

// Step 3: Determine a winner.
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
    } else if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
    } else if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
    }
};

// Test determineWinner function
console.log(determineWinner('rock', 'scissors')); // Output: You win!

// Step 4: Start the game and log the results.
const playGame = () => {
    const userChoice = getUserChoice('rock'); // You can change the argument to 'paper' or 'scissors'.
    const computerChoice = getComputerChoice();

    console.log(`User Choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    // Check for the cheat code
    if (userChoice === 'bomb') {
        console.log('You win! (Cheat code activated)');
        return; // Exit early
    }

    console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();

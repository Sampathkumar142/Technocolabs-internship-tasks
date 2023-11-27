// Define a variable called userName that is set to an empty string.
let userName = '';

// Create a ternary expression to decide what to do if the user enters a name or not.
// If the user enters a name, use string interpolation to log Hello, Jane! to the console.
// Otherwise, simply log Hello!
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable named userQuestion.
// The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
let userQuestion = 'Will I get a promotion?';

// You can include the user’s name in the console.log() statement, if you wish!
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

// Generate a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

// Create another variable named eightBall, and set it equal to an empty string.
let eightBall = '';

// Here are 8 Magic Eight Ball phrases:
// 'It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now',
// 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
console.log(`Magic Eight Ball says: ${eightBall}`);

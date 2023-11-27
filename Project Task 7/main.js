let myAge = 25; 

// Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2;

// Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;
// Set the result equal to a variable called laterYears. We’ll be changing this value later.

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;
// Use the multiplication assignment operator to multiply and assign in one step.


// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

// Let’s use a string method next.
// Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
let myName = 'John'.toLowerCase();
// The toLowerCase method returns a string with all lowerc


// Use string interpolation to display the value in the following sentence:
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.

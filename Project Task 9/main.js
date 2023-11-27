// Step 2: Create a variable that indicates whether a runner registered early or not.
let isRegisteredEarly = true; // You can change this later as you test different runner conditions.

// Step 3: Create a variable for the runner’s age and set it equal to a number.
let runnerAge = 20; // You can change this later as you test different runner conditions.

// Step 4: Create a control flow statement that checks whether the runner is an adult AND registered early.
let raceNumber = Math.floor(Math.random() * 1000); // Assign a random race number

if (runnerAge > 18 && isRegisteredEarly) {
  raceNumber += 1000;
}

// Step 5: Create a separate control flow statement to determine race time.
if (runnerAge > 18 && isRegisteredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !isRegisteredEarly) {
  // Step 6: Late adults run at 11:00 am
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  // Step 7: Youth registrants run at 12:30 pm (regardless of registration)
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  // Step 9: For runners exactly 18 years old
  console.log("Please see the registration desk.");
}


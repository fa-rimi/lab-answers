// EASY GOING === Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// GET EVEN === Write a for loop that will log only the even numbers in 0 through 200..
for (let evenNum = 0; evenNum <= 200; evenNum += 2) {
  console.log(evenNum);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// FIZZ BUZZ === This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) console.log("Fizz");
  if (num % 5 === 0) console.log("Buzz");
  if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// WILD WILD LIFE === Use the following arrays to answer the questions below (name, species, age, hometown).
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// step1 === Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2, 1, "5001");
console.log(plantee);
// Option 1 == 2 (which argument), 1 (how many you want to remove), "5001" (what you're changing it into)
// Option 2
// plantee[2] = "5001";
// console.log(plantee);

// step2 === Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// step4 === Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice = (3, 1, "Gotham City");
wolfy.splice = (0, 1, "Gameboy");
console.log(wolfy);

// step3 === Give D'Art a second hometown by adding "Hawkins"
dart.push = "Hawkins";
console.log(dart);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// YELL AT NINJA TURTLES === Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// Use a for of loop to call toUpperCase() on each of them and print out the result.
const ninjaTurts = ["Donatello", "Leonardo", "Raphael", "Michelangelo"];

// Shortcut to for loop == for all elements of the array do this
// For Loop allows for flexibility but for of targets all of it
for (let turtle of ninjaTurts) {
    // creating and assigning turtle to every ninja turtle in the array
    console.log(turtle.toUpperCase());
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// METHODS, REVISITED === Here is a list of my favorite movies:


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// WHERE IS WALDO

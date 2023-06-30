// EASY GOING === Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// GET EVEN === Write a for loop that will log only the even numbers in 0 through 200..
for (let evenNum = 0; evenNum <= 200; evenNum+=2) {
    console.log(evenNum)
}

// FIZZ BUZZ === This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0)
    console.log('Fizz');
    if (num % 5 === 0)
    console.log('Buzz');
    if (num % 3 === 0 && num % 5 === 0)
    console.log("FizzBuzz")
}


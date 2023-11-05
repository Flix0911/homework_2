////////////////////////////////
// Easy Going
////////////////////////////////
//Write a loop that will log numbers 1 through 20 ~ meaning this should show 1-20. 
//i needs to begin at 1 and should stop a 20, meaning it must be less than 21 to log those numbers
//want to add 1 incrementally

for (let i = 1; i < 21; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
//Write a loop that will log only the even numbers 0 through 200 ~ this should only show even numbers as this loops
//v needs to begin at 0, because that is a even number. v should be < 201 because it needs to go to 200
//need to write if / else statement. if even, console log, if else, don't consnole log

for (let v = 0; v < 201; v += 2) {
    console.log(v);
    }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
//Write an application that logs all numbers from 1-100. q should = 1 and should be less than 101
//want to add 1 incrementally
//if a number is divisible by 3 log fizz instead of the number. should write an if statement where v / 3
//Completed that part and received 34 fizz divisible by 3
//Completed the 2nd part and recieved 21 buzz divisable by 5
//3rd part is not complete. It is logging twice and doubling the amount of FizzBuzz I should receive
//figured out my problem from part 3. I put || which is "or" which I should of put && which is "and"
//unsure why console.log(q) is not having all the other numbers come out
//committing and will come back to this



for (let q = 1; q <101; q++) 
    if (q % 3 === 0) {
        console.log("Fizz");
    } else if (q % 5 === 0) {
        console.log("Buzz");
    } else if (q % 5 && q % 3) {
        console.log("FizzBuzz");
    } else {
        console.log(q);
    }
////////////////////////////////
// Wild Wild Life
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////



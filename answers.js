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
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Use the above array (name, specias, age, hometown): You should be modifying the elements by accessing them

//1. Plantee just had her birthdayl change Plantee's array to reflect her being a year older
//singled out plantee's age. index 2
//console.log(plantee[2])

//I feel like this is not what you're looking for. I looked up the method and splice seemed to be the easier.
//I spliced the 2nd index, 1 item, and 5001 is my deired result and then console.log(plantee[2])
plantee.splice(2, 1, 5001);
console.log(plantee[2])
//confirm changes below
console.log(plantee)

//2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
//Going to tackle this the same as above
//single out wolfy's hometown, index 3
//console.log(wolfy[3])

wolfy.splice(3, 1, "Gotham City");
console.log(wolfy[3])
//confirm changes below
console.log(wolfy)

//3. Give D'Art a second hometown by adding Hawkins
//Again, tackling with the same method
//single out dart by the below
//console.log(dart[3])

dart.splice(4, 0, "Hawkins")
console.log(dart[3])
//confirm changes below
console.log(dart)

//4. Porgee decides that Wolfy can't be named Wolfy anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
//single out wolfy's name wolfy
//console.log(wolfy[0])
wolfy.splice(0, 1, "Gameboy")
console.log(wolfy[0])
//confirm changed below to the wolfy array
console.log(wolfy)
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



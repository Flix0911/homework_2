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

//1. Create an array with the members of the ninja turtles
const arr = ["donatello", "leonardo", "raphael", "michaelangelo"]
let updatedArr = []

//2. use a `for of loop` to call toUpperCase() on each of them and pring out the result
//I don't believe the below is the ideal, feels like there is another way I should of tackled this.
//Was googling a for of loop and toUpperCase()
//Found an example and it does make sense
//the for of loop was simple saying let item of arr
//from there, added a new variable below as let updatedArr (because I'm turning everything capital)
//This is creating a variable called item and tying it toUpperCase
//this is creating the variable value and tying it to updatedArr
//Finally, logging it into the console
//I think I'm getting confused on this one and the example I found showing a for of loop is getting lost on me. Not confident on this but did get it to work
for (let item of arr) {
    const value = item.toUpperCase();
    updatedArr.push(value);
}
console.log(updatedArr)
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//0. console log the index of titanic
//use the indexOf method to find the index of the element
//let index = favMovies.indexOf('Titanic');
//console.log(index)

//1. use the .sort method thought question: What did this do to the array? did it permantely alter it?
favMovies.sort();
console.log(favMovies)
//Yes it did change the array. It is now sorting by alphabetical order in terminal

//2. Use the method pop
favMovies.pop();
console.log(favMovies)
//Using the pop method, it removed 'Volver' from the bottom of my now sorted array in terminal

//3. Push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
//It now added "Guardians of the Galaxy" to the bottom of my array in termianl

//4. Reverse the array
favMovies.reverse()
console.log(favMovies)
//This reversed everything in my array in the terminal. What was at the top is now at the bottom and vica-versa 

//5. Use the shift method
favMovies.shift()
console.log(favMovies)
//This removed "Gurardians of the Galaxy" at the top of my array when ran in terminal

//6. Unshift - what does it return?
favMovies.unshift();
console.log(favMovies)
//This didn't seem to do anything. "Guardians of the Galaxy" did not return. Is this correct? Say it add new elements to the beginning but I didn't designate anything between the unshift()

//7. Splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//1st I commented out 0. above so I can run the block to figure out 'Django Unchained''s index#

//let index = favMovies.indexOf('Django Unchained');
//console.log(index)
//This gave me an index of 14, now I can splice
favMovies.splice(14, 1, "Avatar")
console.log(favMovies)
//This replaced 'Django Unchained' in the array in the termimal with 'Avatar' at the 14th index

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//9. Store the value of your slice in a variable, console.log it - Thought question: what is going on here?
//10. Console.log your final results
//These 3 had to be completed at the same time

//I 1st had to figure out the halfway point of my array
//Did some google and found a solution
//called the variable halfwaypoint 
//What I found mentioned math.floor, but I feel like for this example, this may be my only choice? These numbers are whole numbers so maybe it doesn't matter as much
//I think this because ceil would round 9 to 10. I believe I could use Math.round but I'm not confident in that. I ran it and it gave me 9 but I feel like it's a bad idea


const halfwayPoint = Math.floor(favMovies.length / 2);
console.log(halfwayPoint)
//found the answer is 9, time to slice my array in half
const firstHalf = favMovies.slice(0, halfwayPoint);
const secondHalf = favMovies.slice(-halfwayPoint); //var secondHalf is hold the 2nd half of the array

console.log(firstHalf)
console.log(secondHalf)

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
let index = favMovies.indexOf('Fast and Furious');
console.log(index)
//Had to comment out the above
//Somewhat confused by this. It returned 13 which means it is beginning at 'Toy Story' and not splitting these into 2 different arrays. Is this correct?

//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//Technically, we still have the same array, we only split it in 2, but it's still running sequentially. We didn't actually change anything in the end.
//I'm pretty confused by this and not fully understanding the why of what is occuring

// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////



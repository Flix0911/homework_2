//Part I: HTML & CSS

//I'd rate a 5
//Played around with the basics and I'm ready to dive in


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
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//1. Remove Eggbert
//1st need to figure out the index of Eggbert
//let index2 = whereIsWaldo.indexOf('Eggbert')
//console.log(index2)
//Index of Eggbert is 1. I feel confident this is correct because the 0 index is what is in the added brackets []
//Now I remove Eggbert with splice
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo)
//Eggbert has been removed

//2.Change "Neff" to "No One"
const neffIndex = whereIsWaldo[2].indexOf("Neff");
console.log(neffIndex)


//Very interesting, Neff is -1.
//Looked this up, said if it gives -1 as the element, it was not found. It is index 2 if you count but when trying splice and using the index 2, it doesn't give me my desired result

//whereIsWaldo.splice(2 , 1, "No One");
//console.log(whereIsWaldo)
//The above is wrong but showing my though process. Trying something else

whereIsWaldo[2][neffIndex] = "No One";
console.log(whereIsWaldo)

//Access console.log for "Waldo"
//I believe the below is correct? Seems too simple?
console.log("Waldo")
//1st I need to find the index of neff. I commented out the above to find Eggbert


////////////////////////////////
//  Excited Kitten
////////////////////////////////
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times

//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

//1st I need to make an array of responses (used hint 1 on this)
const kittytalk = ["...human...why are you taking pictures of me?...", "the catnip made me do it...", "...why does the red dot always get away..."]

//Checked responses to confirm array is functional
//console.log(kittenResponses)

//Creat a for loop that will run 20 times
for (let k = 0; k <20; k++) {
    //randomize from the array and create randomKittyTalk variable to pull from later
    const randomKittyTalk = kittytalk[Math.floor(Math.random() * kittytalk.length)]
    //if k is divisible by 2 run randomKittyTalk
    if (k % 2) {
        //console.logs the response
    console.log(randomKittyTalk);
    } else {
        //console.log the response if not divisible by 2
        console.log("Love me, pet me! HSSSSSS!")
}
}

//I don't feel great about the above. When I read your hints, I didn't use bracket notation. If I am running bracket notation, then I'm not understanding what it means
//Came to this result after a lot of searching, this problem took me a while to figure out. the k%2 was fine, the for let statement was fine
//What I struggled with is the const randomKittyTalk and it took me a while to get to the conclusion

    
////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//Expected output:
//=> 15

//declare a function called findMedian which is using a parameter of the array above, nums
function findMedian(nums) {
    //had to look up sorting for median. below is sorting the array in ascending order
    nums.sort((a, b) => a - b);
    //from here declaring a variable middleIndex to find the middle number (there are 25 variables above) this means it won't be a while number
    const middleIndex = Math.floor(nums.length / 2);

    //if the array has an even number of elements, which it doesn't, the median should be the average of the two middle number
    if (nums.length % 2 === 0) {
        return (nums[middleIndex - 1] + nums[middleIndex]) / 2;
        //if it is an odd number of elements, then the middle number of the whole thing will be returned. In this case, it is an odd number and should return the middle of all the numbers
    } else {
        return nums[middleIndex];
    }
}
console.log(findMedian(nums))

//I don't feel great about this one as well.
//I can see where this is pulling and somewhat understand the while, but creating this completely on my own was not possible
//I needed a lot of help and googling online to add pieces. The return lines were copied, that is my main confusion. It does make sense sort of what they're doing, but I couldn't reach that conclusion on my own

////////////////////////////////
//   Return of the closets
////////////////////////////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  
//1. Kristyn's left shoe has traveled through time and space and turned up in Thom's 
//accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

//1st I need to find what index Kristyn's left shoe is

// let kristynIndex = kristynsCloset.indexOf('left shoe');
// console.log(kristynIndex)
//index of 0

//removed left shoe and created a variable to hold the left shoe
// const kristynsShoe = kristynsCloset.splice(0,1)
// console.log(kristynsCloset)
// console.log(kristynsShoe)

//find where in the index Thom's accessories are
// let thomIndex = thomsCloset.indexOf('wool mittens')
// console.log(thomIndex)
//-1

//add in left shoe to to Thom's accessories
// thomsCloset.splice(-1, 1, 'left shoe')
// console.log(thomsCloset)

//I don't believe this is correct. I logged the variable of left shoe into kristynsShoe but I didn't use that

//Dress Us Up - skipped
//1. Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

//Kristyn will wear, cowboy boots, GA hoodie, and green pants

//lets begin by logging the index of all of them

// //cowboy boots
// let KristynIndexBoots = kristynsCloset.indexOf('cowboy boots')
// console.log(KristynIndexBoots)
// //index = 0

// //GA hoodie
// let kristynIndexGa = kristynsCloset.indexOf('GA hoodie')
// console.log(kristynIndexGa)
// //index = 2

// //green pants
// let kristynIndexGreen = kristynsCloset.indexOf('green pants')
// console.log(kristynIndexGreen)
// //index = 3

// //Quick note - I tried to do this in 1 line but only received the 1st value of the index, 0. Could not find a solution

// //Adding them all together
// console.log('kristynIndexGa', 'kristynIndexGreen', 'KristynIndexBoots')

//I tried a lot of different ideas and got no where. I think I was tackling this incorrectly but I left the start and moved onto the next


//Dirty Laundry
//1.Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

//for loop

//loop the function
kristynsCloset.forEach(function (item) {
    console.log('WHIRR: Now Washing', item); //console log the "" and then the item
})

//I feel ok, not bad, not amazing, but ok
//For the closet, I went from feeling really good like I was getting things to the opposite end of I'm not fully grasping this.
//Same goes for the main assignment itself. Back and forth of postives and negative. I completed this 11/10 and was hoping the lessons from the week would help a bit
//The classes this week certainly did but not to make me feel like "wow I got this"
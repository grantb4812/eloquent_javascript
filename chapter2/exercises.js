/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var triangleSize = Number(prompt("Enter a number"));

var i = 0;
var hash = "";
while (i < triangleSize) {
    hash += "#";
    console.log(hash);
    i++;
}

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
So if you solved it, you’re now allowed to feel good about yourself.)
*/

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/
//this loop is for the height
var anySize = Number(prompt("Enter a number for the size of your board"));
var empty = "";
// loop for the line top to bottom
for (var l = 0; l < anySize; l++) {
    //empty = "";
    //this loop is for the rows left to right
    for (var r = 0; r < anySize; r++ ) {
        if((r + l) % 2 == 0) {
            empty += " ";
        } else {
            empty += "#";
        }
        
    }
    empty = "\n";
}
console.log(empty);
/*
This works when I use a character in the space for the " " but if
I add in just a space " " for some reason it doesnt work correctly
*/
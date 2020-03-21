//text lenght
var text = prompt("Tweet text");
var tweet = text.length;
tweet.slice(0, 140);
alert("You have entered " + text.length + "please note, there are limitations of 140 characters in the field"); //
//prompt text=("Enter your text");
//dos age
var dogAge = prompt("Enter the age of your dog?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog`s age if it was human, would be: " + humanAge);

//buckets 
function test() {

    var a = "3";
    var b = "8";
    var c = a;
    b = c;
    a = b;
    console.log("a" + a);
    console.log("b" + b);
}

//concatenation
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written" + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining");

//slicing
var name = "Los Angeles";
name.slice(0, 1); //"L

II SLICING via - construction name of variable.slice(x, y), example
bread.slice(x, y);
of name.slice(x, y)
the quickest way to determine,
which partition will be taken is to take is to extract: (upper bound - lower bound)
name.slice-- -- -- -- --slice(x, y);
-- -- -- --

1. example, execute from 0 to the first character including:
    var name = "Angela";
name.slice(0, 1);
//1-0=1
**
**
*
"A"
-- -- --
2. example
var name = "Angela";
name.slice(0, 3);
//3-0=3
**
*
"Ang"
-- -- --
3. example
var name = "Angela";
name.slice(1, 5);
//5-1=4 - but counts from the 1st position
**
*
"ngel"
-- -- --
var name = "Angela";
name.slice(1, 3);
//3-1=2 - but counts from the 1st position
"ng"
-- -- -- --Task-- -- -- -- -- -
//Write some code,for a field in which there are validationsfor limitation for 280 characters will slice a text up to 280 characters

var name = "Angela";
name.slice(4, 6);


//задача ** ** *
//Create a twitter character counter, when you paste a larger amount of text up to 280 characters.. then it should give you an alert that cuts your tweet down to a 140 characters
-- -
I.solution
var text = prompt("Tweet text");
var tweet = text.slice(0, 140);
alert("You have entered " + tweet + " characters, please note, there are limitations of 140 characters in the field");
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//II same solution
will work as:
    alert(prompt("Compose your tweet:").slice(0, 140));
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//Method: name.toUpperCase(); >> this method turns all charachters in the word to an upper
//case version of it
//example:
word.toUpperCase
    //Example:
    (where name is initiated, then variable will be reassigned to the same variable, but modified with uppeor
        case letters)
    -- -
    var name = "Angela";
name = name.toUpperCase(); **

"ANGELA"
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//Method with same logic is >> name.toLowerCase();
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//Задача:
//имаме промпт, свободен текс, да обърнем първата буквичка на главна и другите на малки и да изпечатаме в конзола.
//1. Решение:
var name = prompt("What is your name?");
var capitalLetter = name.slice(0, 1);
var smallLetter = name.slice(1, 140); // optionally could be used var smallLetter=name.slice(1,name.length);
capitalLetter = capitalLetter.toUpperCase();
smallLetter = smallLetter.toLowerCase();
alert("Hello " + capitalLetter + smallLetter);
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//2. Решение:
var name = prompt("What is your name?");
var capitalLetter = name.slice(0, 1);
var smallLetter = name.slice(1, name.legth);
capitalLetter = capitalLetter.toUpperCase();
smallLetter = smallLetter.toLowerCase(); **

//III.Arithmetic and Modulo Oeprator in Javascript
A.Substraction
var b = 10 - 2;
B.Multiplication
var c = 3 * 3;
C.Division
var d = 6 / 2;
// Modulo - why it is used ? So that the number will be defined as odd(нечетно число) or even(четно).
var e = 9 % 6; //3
1. Example:
    10 % 5
0
2. Example:
    10 % 4
2
3. Example
2 % 2
0
4. Example
5 % 5
0
-- -- -- -- -- -- -- -- -- --Задача-- -- -- -- -- -- -
//Create a dog age to human age converter, using the following formula:
human Age = (dogAge - 2) * 4 + 21

var dogAge = prompt("Enter the age of your dog?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog`s age if it was human, would be: "
    humanAge);
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//Increment and Decrement expressions:
Increment
var x = 5;
x = x + 1;
x++
-- -- -- -- -- -- -- -
//Decrement
var y = 5;
y = y - 1;
y++
-- -- -- -- -- -- -- -
var x = 5;
x = x + 2;
x += 2 //7
    -- -- -- -- -- -- -- --
    var x = 5;
var y = 3;
x += y; //8
-- -- -- -- -- -- -- -
//that walso works
for +=
-=
*=
/=
-- -- -- -- -- -- --Functions-- -- -- -- -- --
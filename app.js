var name = "Martin";
console.log(name);

var myLoc = "Boston";
console.log(myLoc);

var favNum = 7;
console.log(favNum);

var teams = ['Rockets', 'Lakers', 'Warriors', 'Clippers', 'Blazers', 'Celtics', 'Nets']
console.log(teams);

// while loops
var num = 10;
var otherNum = 1
while (otherNum < num) {
    console.log(otherNum);
    otherNum +=1;

}

var numTwo = 20;
var myOtherNum = 10;

while (myOtherNum < numTwo) {
    console.log(myOtherNum);
    myOtherNum += 1;
}
var startNum = 0
while (startNum < favNum) {
    console.log("Attempting " +startNum);
    startNum += 1;
}

// for loops
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < teams.length; i++) {
    console.log(teams[i]);
}

var colors = ['Blue', 'Green', 'Red', 'Yellow'];

for (var i = 0; i <colors.length; i++) {
    console.log(colors[i]);
}

const cars = ['Tesla', 'Honda', 'Toyota', 'Ford'];
console.log(cars);
for (let i = 0; i < cars.length ; i++) {
    let eachCar = cars[i];
    console.log(eachCar);
}

// objects
// key : value

const martin = {
    fullName: 'Martin briceno',
    age: 42,
    myLocation: 'Boston',
    placesTravel: ['Canada', 'IceLand', 'Costa Rica', 'Peru']
}

console.log(martin);
console.log(martin.myLocation);
console.log(martin.placesTravel[2]);

const myReallyCoolPost = {
    userName: '@generalassembly',
    likes: 1200,
    comments: ['Cool post!', 'nice', 'JS is cool', 'woah'],
    caption: 'Day 3 of SEI',
    picture: 'http://instagram.com/generalassembly/...',
    shares: 12
}

console.log(myReallyCoolPost);
myReallyCoolPost.myLocation = 'Boston';
console.log(myReallyCoolPost);

const instObject = {
    userName: 'martinB',
    likes: "Its over 9000!!!",
    comments: ['Cool post!', 'nice', 'JS is coDBZl', 'woah'],
    caption: 'My JS power level',
    picture: 'http://instagram.com/generalassembly/...',
    shares: 99
}

function sayHello() {
    console.log("Hello");
}

const sayHelloAgain = function() {
    console.log("Hello again");

}

const sayHelloFinal = () => {
    console.log("Hello one last time");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printNumbers (nums) {
    for ( let i = 0; i < nums.length; i++) {
        let newNum= nums[i];
        console.log(newNum);
        if (newNum < 5) {
            console.log("The number " +newNum+ " is less than 5");
        } else {
            console.log("The number " +newNum+ " is greater than 5");
        }

    }
}
printNumbers(numbers);

function addNums (array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        result += num;
    }
    return result;
}
console.log(addNums(numbers));

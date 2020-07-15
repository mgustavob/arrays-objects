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

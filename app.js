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

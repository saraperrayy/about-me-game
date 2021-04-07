'use strict';
// If conditional based confirm command
let answer1 = confirm('Are you ready to rumble?')
if (answer1 === true) {
  console.log('LET\'S GET READY TO RUMBLE!!!')
} else {
  console.log('It\'s above me now.')
}
// logical operator
let myBool = false;
let anotherBool = false;
let thirdBool = false;
if (myBool && thirdBool) {
  console.log('myBool and thirdBool were both true');
} else if (myBool || anotherBool) {
  console.log('My bool or anotherBool was true!');
} else if (thirdBool) {
  console.log('myBool and anotherBool were false, but thirdBool was true.')
} else {
  console.log('Were any of my variables true, cuh?');
}
let color = prompt('what is your favorite color');
// convert the variable color to lower case to evaluate it
switch (color.toLowerCase()) {
  case 'red': 
  alert('your favorite color was red!');
//break statement follows each case to 'break' the loop not needed if return is present
  break;
  case 'blue':
  alert('your favorite color was blue!');
  break;
// default statement is what is fired in there event none of the cases occur
  default:
  alert('I don\'t know what your favorite color was ¯\\_(ツ)_/¯');
}

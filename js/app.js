'use strict';
// If conditional based confirm command

// allow the user to input their name for a personalized experience
let username = window.prompt("Welcome to my site. What is your name?")
// Check to see if a username is Sara
if(username === '') {
    document.write('Enter your username')
} else {
     document.write(`<h1>Thank you ${username}</h1>`)
}
alert( 'Let\'s see what you can guess about me!')

let answer1 = confirm('Are you ready to play a game?')
if (answer1 === true) {
  /*console.log('Great! Let\'s begin!')*/
  alert('Great! Let\'s begin!')
} else {
  /*console.log('See you again soon.')*/
  alert('See you again soon.')
}
// add point system
let points = 0;
let school = prompt('Did Sara go to Middle Tennessee State University?')
// convert the variable color to lower case to evaluate it
if (school.toLowerCase() === 'yes') {
  alert('You\'re correct!')
  points++;
  alert('You earned a point! Total points: ' + points)
  } else {
    alert('Sorry, Sara is a True Blue alum')
    alert('Total points: ' + points)
  }
  let schoolyear = prompt('Did she graduate from MTSU in 2018 or 2020?')
  if (schoolyear.toLowerCase() === '2020') {
  alert(' Correct! Sara just graduated with a Bachelors of Science degree in Journalism!')
  points++;
  alert('Congrats, you earned a point. Total points: ' + points)
  } else {
      alert('Sorry, you missed the question!')
      alert('Total points: ' + points)
  }  
let state = prompt('Does Sara live in Tennessee or California?')
    if (state.toLowerCase() === 'tennessee') {
    alert('Correct! Sara lives in the Volunteer State!')
    points++;
    alert('You earned a point! Total points: ' + points)
    } else {
      alert('That is incorrect, maybe one day!')
      alert('Total points: ' + points)
    }
let job = prompt('Did she work for a pharmacy?')
    if (job.toLowerCase() === 'yes') {
    alert(' Correct!')
    points++;
    alert('Total points: ' + points)
    } else {
        alert('Sorry — maybe you\'ll get the next one right!')
        alert('Total points: ' + points)
    }
let business = prompt('What year did she start Gemini Design Studio?')
    if (business.toLowerCase() === '2021') {
    points++;
    alert(' Correct! Total points: ' + points)
    } else {
        alert('Sorry, friend — that\'s incorrect.')
        alert('Total points: ' + points)
    }
let network = prompt('Did she work for Women In The Lead?')
    if (network.toLowerCase() === 'no') {
    alert(' Great work! You are correct!')
    points++;
    alert('Here\'s a point! Total points: ' + points)
    } else {
        alert('Sorry! That was a trick question. Sara was only a professional member of this organization.')
        alert('Total points: ' + points)
    }
// multiple choice question using an array
let answer2 = prompt('What is my favorite kind of dog? Options: Labradoodle, Frenchie, Pug, Samoyed, Xolo, Great Pyrenese')
let dog = ['Labradoodle, Frenchie, Pug, Samoyed, Xolo, Great Pyrenese'];
let rightAnswer = 'frenchie';
let i = 0;
// 6 attempts to get correct
while (i < 6) {
  if (answer2.toLowerCase() !== rightAnswer) {
    alert(`Sorry, your answer is incorrect. ${5 - i} attempts left`);
    answer2 = prompt('What is my favorite kind of dog? Options: Labradoodle, Frenchie, Pug, Samoyed, Xolo, Great Pyrenese');
    } 
  else {
    points++;
    alert('Correct!');
    break;
  }
  i++;
}
// display the correct answers to the user
alert(`The answer is ${rightAnswer}`);
alert('Your final score: ' + points + ' points!')
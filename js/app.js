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
let school = prompt('Did Sara go to Middle Tennessee State University?')
// convert the variable color to lower case to evaluate it
if (school.toLowerCase() === 'yes') {
  alert('You\'re correct!')
  } else {
    alert('Sorry, Sara is a True Blue alum')
  }
  let schoolyear = prompt('Did she graduate from MTSU in 2018 or 2020?')
  if (schoolyear.toLowerCase() === '2020') {
  alert(' Correct! Sara just graduated with a Bachelors of Science degree in Journalism!')
  } else {
      alert('Sorry, you missed the question!')
  }  
let state = prompt('Does Sara live in Tennessee or California?')
    if (state.toLowerCase() === 'tennessee') {
    alert(' Correct! Sara lives in the Volunteer State!')
    } else {
        alert('That is incorrect, maybe one day!')
    }
let job = prompt('Did she work for a pharmacy?')
    if (job.toLowerCase() === 'yes') {
    alert(' Correct!')
    } else {
        alert('Sorry — maybe you\'ll get the next one right!')
    }
let business = prompt('What year did she start Gemini Design Studio?')
    if (business.toLowerCase() === '2021') {
    alert(' Correct!')
    } else {
        alert('Sorry, friend — that\'s incorrect.')
    }
let network = prompt('Did she work for Women In The Lead?')
    if (network.toLowerCase() === 'no') {
    alert(' Great work! You are correct!')
    } else {
        alert('Sorry! That was a trick question. Sara was only a professional member of this organization.')
    }
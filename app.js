var errorCount = 0;
var correctAnswers = 0;

var countErrors = function(errors) {
  if (errors === 1) {
    alert('You failed to enter Y/N or yes/no as an answer - please do so for future questions.');
  } else if (errors === 2) {
    alert('So... Again, all answers must be Y/N or yes/no. Please follow instructions.');
  } else if (errors === 3) {
    alert('Dude. Maybe you must be stupid. All answers will either be a simple YES or NO.');
  } else if (errors === 4) {
    alert('I\'m just about done with you. You\'re not even listening.');
  } else {
    alert('That\'s it. We\'re done. Go away.');
    window.location = 'http://lmgtfy.com/?q=how+to+answer+a+yes+or+no+question';
  }
};

var userName = prompt('Hi there! What\'s your name?');

if (userName === null || userName === '') {
  alert('Well, you need a name, so... We\'re going to call you Simple.');
  userName = 'Simple';
}

console.log('Guest\'s name: ', userName);

var buttQuestions = ['Would you like to play?, ' + userName + '?'];

buttQuestions.push('So, ' + userName + ', do you think it\'s true that Regenal\'s loves women Butt?');
buttQuestions.push('Regenal Likes this song from Sir Mixalot?');
buttQuestions.push('How about a simpler one, ' + userName + '. Would you guess Regenal Ass size?');
buttQuestions.push('Alright, here\'s one without a correct answer. Do you think Regenal is got Big Butt?');

var yesAnswers = ['As a matter of fact, you must playing the other team, to be precise.'];
yesAnswers.push('Yep - There are 2 types of Asses type.');
yesAnswers.push('You are correct. Heavy ass.');
yesAnswers.push('WOW drop the mic. Not quite that Big!');
yesAnswers.push('Well, that\'s very kind of you, ' + userName + ', thank you. I like big Butts and I cannot lie!');

var noAnswers = ['answer it fool.'];
noAnswers.push('Actually, he has - as a matter of fact, there are two indies games on Steam he\'s featured in.');
noAnswers.push('Actually, it was. In fact, it\'s a particular variant called EDH or Commander.');
noAnswers.push('Hey, good for you seeing past the baldness! Steven was born in \'86, making him 30 this year.');
noAnswers.push('Aww. Well, hopefully he\'ll change your mind, ' + userName + '.');

var buttAnswers = [];
var possibleAnswers = ['y', 'yes', 'n', 'no'];

function fiveQuestions() {
  for (var i = 0; i < buttQuestions.length; i++) {
    buttAnswers[i] = prompt(buttAnswersQuestions[i]);
    if (buttAnswers[i] === null || buttAnswers[i] === '') {
      buttAnswers[i] = 'blah';
    }
    var noMatch = 0;
    for (var j = 0; j < possibleAnswers.length; j++) {
      if (buttAnswers[i].toLowerCase() === possibleAnswers[j]) {
        if (buttAnswers[i].toLowerCase() === possibleAnswers[0] || buttAnswers[i].toLowerCase() === possibleAnswers[1]) {
          alert(yesAnswers[i]);
          correctAnswers++;
        } else if (buttAnswers[i].toLowerCase() === possibleAnswers[2] || buttAnswers[i].toLowerCase() === possibleAnswers[3]) {
          alert(noAnswers[i]);
        }
        console.log('Guest\'s answer to question #', i + 1, ': ', gameAnswers[i]);
      } else {
        noMatch++;
      }
    }
    if (noMatch === 4) {
      errorCount++;
      countErrors(errorCount);
      if (errorCount === 5) {

        i = buttQuestions.length;
      } else {
        i--;
      }
    }
  }
}

fiveQuestions();

console.log('The user currently has ', correctAnswers, ' correct answers');

var userGuess = 0;
var randomNumber = Math.floor(Math.random() * 20);
var numGuesses = 0;
console.log('The random number is ', randomNumber);

function wrapOne() {
  alert('Let\'s switch gears here. Time to guess this girls ass size 1 and 20. You get 2 guesses!');
  while (userGuess !== randomNumber) {
    userGuess = prompt('OK - make a guess!');
    if (userGuess < randomNumber) {
      alert('Too little - go higher!');
    } else if (userGuess > randomNumber) {
      alert('Too big - drop it lke its hot!');
    } else {
      alert('Congratulations! You\'re correct! The Ass size was ' + randomNumber + '.');
      userGuess = randomNumber;
      correctAnswers++;
    }
    numGuesses++;
    if (numGuesses >= 2 && userGuess !== randomNumber) {
      alert('No more guesses. The correct Ass size was ' + randomNumber + '.');
      userGuess = randomNumber;
    }
  }
}

wrapOne();

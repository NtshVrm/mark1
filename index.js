var readLineSync = require('readline-sync');

var score = 0
var userName = readLineSync.question('Enter Your Name? ')

console.log('Hey! ' + userName + ', HOW WELL DO YOU KNOW NITISH?!' );

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer) {
    console.log('Yay,Right Answer!')
    score += 1;
  } else {
    console.log('Oops,Wrong Answer!');
    // score = 0;
  }

  console.log("Your Score is: " +score);
  console.log('---------------');
}

var highScores = [{
  name: 'Max',
  score: 8},
  {name: 'Jack',
  score: 7}
]

var questions = [{
  question: `My Birth Place
  A: Banaglore
  B: Chennai
  C: Chittoor `,
  answer: 'A'},
  {question: `My Date Of Birth
  A: 23 Dec 2000
  B: 15 Nov 2000
  C: 17 April 2000 `,
  answer: 'A'},
  {question: `My Favourite Color
  A: Black
  B: Blue
  C: Yellow `,
  answer: 'B'},
  {question: `My Favourite TV Show
  A: Friends
  B: Money Heist
  C: Narcos `,
  answer: 'A'},
  {question: `My Favourite Cuisine
  A: Italian
  B: Indian
  C: Thai `,
  answer: 'C'},
  {question: `My School Name
  A: Sindhi High School
  B: Delhi Public School
  C: Kensri School `,
  answer: 'C'},
  {question: `My Favourite Subject
  A: Mathematics
  B: Social Studies
  C: Science `,
  answer: 'A'},
  {question: `My Favourite Sport
  A: Racing
  B: Cricket
  C: Football `,
  answer: 'A'
}]

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer);
}
console.log('The Winners are: ');
for(var i=0; i<highScores.length;i++) {
  var currentScore = highScores[i];
  if(score < currentScore.score) {
    console.log(currentScore.name);
  }else {
    console.log(userName);
    console.log('Congrats on Winning!');
  }
}
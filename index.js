const readLineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readLineSync.question("What's your Name: \n");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 5 Questions on Machine Learning and all are Compulsory.');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. For answering you have to type the Serial Number / Index Value.');
console.log('\n');

const questions = [
  {
    question: "Let’s say, you are using activation function X in hidden layers of neural network. At a particular neuron for any given input, you get the output as “-0.0001”. Which of the following activation function could X represent?",
    options: {
      a : "ReLU",
      b : "tanh",
      c : "SIGMOID",
      d : "None of these"
    },
    correctAnswer: "b"
  },
  {
    question : "Which of the following is/are one of the important step(s) to pre-process the text in NLP based projects? 1.Stemming, 2.Stop word removal , 3.Object Standardization",
    options: {
      a : "1 and 2",
      b : "1 and 3",
      c : " 2 and 3",
      d : "1,2 and 3"
    },
    correctAnswer : "d"
  },
  {
    question : "What would you do in PCA to get the same projection as SVD?",
    options : {
      a : "Transform data to zero mean",
      b : "Transform data to zero median",
      c : "Not possible",
      d : "None of these",
    },
    correctAnswer : "a"
  },
  {
    question : "Which of the following value of K will have least leave-one-out cross validation accuracy?",
    options : {
      a : " 1NN",
      b : " 3NN",
      c : "4NN",
      d : "None of these",
    },
  correctAnswer : "a"
  },
  {
    question : "The model will be trained with data in one single batch is known as ?",
    options : {
      a : "Batch learning",
      b : "Offline learning",
      c : "Both A and B",
      d : "None of the above",
    },
  correctAnswer : "c"
  }
];
var validoptions = ['a','b','c','d'];

let score = 0;
for(let var1=0;var1<5;var1++){
  console.log(""+(var1+1)+". "+questions[var1].question);
  console.log("a) ", questions[var1].options.a);
  console.log("b) ",questions[var1].options.b);
  console.log("c) ",questions[var1].options.c);
  console.log("d) ",questions[var1].options.d);
  const choice = readLineSync.question('Enter your choice out of a,b,c and d\n');

  if(validoptions.includes(choice)){
    //console.log("************");

  
  
  let correctAnswer = questions[var1].correctAnswer;
  if(choice.toLowerCase() === correctAnswer) 
  {
    console.log("CORRECT");
    console.log();
    score += 2;
  }else{
    console.log("WRONG");
    score -= 1;
    console.log();
  }

  }//if conditions ending
  else{
    console.log("Not a Valid Option!, Score of this option wont be considered\n");
  }

}

console.log();
if(score >= 8){
  console.log("Great Job! You are among our top performers");
  console.log("Your SCORE is " + score);
}else{
  console.log("Better Luck Next Time.");
  console.log("Your SCORE is "  + score);
}



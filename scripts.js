'use strict'; // use strict mode to prevent doing mistakes 

//var stringVar = 'lets write some text'; // variable type string
//var numberVar = 12; // variable type number
//var floatNumberVar = 12.5 // number variable of type float
//var booleanVarTrue = true; // boolean variable
//var booleanVarFalse = false; // boolean variable 


// this is not right
// it will not work in strict mode
// wrongWay = 'whatever ...';

// the correct way
//var correctWay = 'This is correct'; // initialize the var
//correctWay = 'New value'; // reassignment of the value 
// console.log(correctWay);
alert("hello world");


// var userFeeling = prompt('How are you feeling today? (good/not good)');
//console.log(userFeeling);
// console.log(userFeeling.toLowerCase());
//console.log(userFeeling.toUpperCase());


// if answer is good
    // alert that we are glad you are feeling good
// else 
    // we want to ask the user why they are not feeling good

 //if(userFeeling.toLowerCase() === 'good'){
  //   alert('we are glad you are feeling good :)');
 //} else if(userFeeling.toLocaleLowerCase() === 'not good'){
    // var why= prompt('Why arent you feeling good? :( (my team lost/ i ran out of pepsi)');
     // nested condition
   //  if(why.toLowerCase() === 'my team lost'){
  //       alert(' dont worry, they might win next time :)')
  //   } else if (why.toLowerCase() ==='i ran out of pepsi'){
   //      alert('its okay, it actually not good for you ;)')
 //    }
// } else {
//    alert("please refresh the page and choose one of the correct answers") 
 //}


//var userInput = prompt("How are you feeling today (true, false)");

//if(userInput.toLowerCase() === 'true'){
 //    alert('Great :)');
// } else {
  //   alert('ok :(');
// }

// var userInput = confirm("How are you feeling today?"); // only takes boolean values (true/ false)
// console.log(userInput);
// if(userInput){
//     alert('Great :)');
// } else {
//     alert('ok :(');
// }
var name = prompt("what is yuor name ?")
alert("Hello  " + name)
var foode = prompt("Where are you from ?")
alert("welcome my frind")
var age = prompt("how old are you ?")
alert("long live ameen")
var foode = prompt("what is your Favorite foode ?")
alert("excellent choice")


var userInput = prompt('how are you feeling today');
// var userInput = confirm('yes or no?');

switch (userInput) { 
    
    case 'good':
    case 'great':
    case 'fine':
        alert('Okay thats great');
        break;
    case 'not good':
        alert('Its okay :( it will get better :)');
        break;
    case 'my team lost':
        alert('dont worry they might win next time');
        break;
    case 'bye bye':
        alert('okay bye');
        break;
    case 12:
        alert('its a number');
        break;
    case true:
        alert('its true');
        break;
    case false:
        alert('its false');
        break;
    default:
        break;
    
}
// // // let func = (arg1, arg2) => arg1 + arg2;
// // // let sum = (a, b) => a + b;

// // // let sayHi = () => alert("Hello!");
// // // sayHi();

// // // console.log(sum(1,2)); 

// // let age = prompt("What is your age?", 18);

// // let welcome = (age < 18) ?
// //     () => alert('Hello!') :
// //     () => alert('Greetings!');

// // welcome();

// // let sum = (a, b) => {
// //     let result = a + b;
// //     return result;
// // };

// // alert(sum(1,2));

// let ask = (question, yes, no) => {
//     return (confirm(question)) ? yes() : no();
// };

// ask("Do you agree?",
//     () => {alert("You agreed.");},
//     () => {alert("You canceled.");}
// );

function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    debugger;  // <-- the debugger stops here
  
    say(phrase);
}

// open console to see
for (let i = 0; i < 5; i++) {
    console.log("value,", i);
}
// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function

// function anotherFunction() {
    
// }
// function showMessage(from, text = anotherFunction()) {
//     alert(from + ": " + text);
// }

// showMessage("Ann", "asd");

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


function pow(num, exponent) {
    return num ** exponent;
}

console.log(pow(3, 3));
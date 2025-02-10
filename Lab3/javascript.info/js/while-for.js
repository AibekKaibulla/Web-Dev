// let i = 3;

// while (i) {
//     alert(i--);
// } //3,2,1

// let i = 0;
// while (++i < 5) alert( i ); //1,2,3,4

// let i = 0;
// while (i++ < 5) alert( i ); 1,2,3,4,5

// for (let i = 0; i < 5; i++) alert( i ); //0,1,2,3,4
// for (let i = 0; i < 5; ++i) alert( i ); //0,1,2,3,4

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) alert(i);
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
let num = parseInt(prompt("Enter n: ", 0));

for (let i = 2; i <= num; i++) {
    if (isPrime(num)) {
        alert(i);
    }
}

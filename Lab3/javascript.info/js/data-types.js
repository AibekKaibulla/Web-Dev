let message = "hello";
message = 1233214;

let n = 123;
n = n / 0;

// alert(Infinity);
// alert("not a number" / 2);

// alert(NaN + 1);

// const bigInt = 1234567890123456789012345678901234567890n;

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// let name = "John";

// alert(`Hello, ${name}!`);

// alert(`the result is ${1+2}`);

// let nameFieldChecked = true;
// let ageFieldChecked = false;

// let isGreate = 4 > 1;

// if(isGreate) {
//     alert(isGreate);
// }

// let age = null;
// alert(age); // null

// let num;
// alert(num); // undefined

// let age = 100;

age = undefined;

alert(age);

/*
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures
*/

let name = "Ilya";

alert(`hello ${1}`); // 1

alert(`hello ${"name"}`); // name

alert(`hello ${name}`); // Ilya
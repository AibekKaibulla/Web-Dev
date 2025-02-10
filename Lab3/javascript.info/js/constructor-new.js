let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true


function Calculator() {
    this.read = function() {
        this.a = +prompt("Enter a", 2);
        this.b = +prompt("Enter b", 2);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.a = +prompt("Enter val", 1);
        this.value += this.a;
    };
};


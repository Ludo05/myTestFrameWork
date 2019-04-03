const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

// Let's write some tests for those functions
let actual , expect;

actual = sum(3,4);
expect = 7;


if (actual !== expect) {
    throw new Error(`Expected ${expect} Actual: ${actual}`);
}



actual = subtract(4,1);
expect = 3;


if (actual !== expect) {
    throw new Error(`Expected ${expect} Actual: ${actual}`);
}

console.log("Test 1 works!");

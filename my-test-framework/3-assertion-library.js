const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;



function expect(actual) {
  function toEqual(expected) {
    if (actual != expected) {
      throw new Error(
        `Actual value was ${actual}, but ${expected} was expected`
      );
    }
  }

  function toBe(expected) {
    if (actual !== expected) {
      throw new Error(
        `Actual value was ${actual}, but ${expected} was expected`
      );
    }
  }

  return {
    toEqual,
    toBe
  };
}
expect(sum(1,4)).toBe(5);
expect(sum(1,5)).toEqual('6');
expect(subtract(1,4)).toBe(-3);
expect(subtract(1,5)).toEqual('-4');

console.log("Test 1 works!");

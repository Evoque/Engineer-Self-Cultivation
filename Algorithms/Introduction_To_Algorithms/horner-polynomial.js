/**
 * 1. Evaluate value of 2x3 - 6x2 + 2x - 1 for x = 3
 *    > poly[] = {2, -6, 2, -1}, x = 3, Output: 5
 *
 * 2. Evaluate value of 2x3 + 3x + 1 for x = 2
 *    > poly[] = {2, 0, 3, 1}, x = 2 Output: 23
 */

/**
 *  naive polynomial evaluation
 */
function naivePolynomial(arr, x) {
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = 1;
    // power
    for (let j = 0; j < arr.length - 1 - i; j++) {
      item = item * x;
    }
    y = arr[i] * item + y;
  }
  return y;
}

/**
 * Horner's polynomial evaluation
 */
function hornerPolynomial(arr, x) {
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    y = y * x + arr[i];
  }
  return y;
}

console.group("polynomial");
const arr = [2, -6, 2, -1],
  x = 3;
console.log("Input: ", arr, x);
console.log("Horner Result: ", hornerPolynomial(arr, x));
console.log("Naive Resule: ", naivePolynomial(arr, x));
console.groupEnd();

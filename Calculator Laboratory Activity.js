// step 5: Removed all the code

// step 6-7: calculateSum

function calculateSum(num1, num2) {
  return num1 + num2;
}

// step 8-9: Test calculateSum

console.log(calculateSum(2, 5));   // 7
console.log(calculateSum(10, 10)); // 20
console.log(calculateSum(5, 5));   // 10

// step 10: calculateDifference
function calculateDifference(num1, num2) {
  return num1 - num2;
}

// Step 11: Test calculateDifference

console.log(calculateDifference(22, 5));  // 17
console.log(calculateDifference(12, 1));  // 11
console.log(calculateDifference(17, 9));  // 8

// step 12: calculateProduct

function calculateProduct(num1, num2) {
  return num1 * num2;
}

// Test calculateProduct
console.log(calculateProduct(13, 5)); // 65

// Step 13: calculateQuotient

function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

// Step 14-15: Test calculateQuotient
console.log(calculateQuotient(7, 11)); // 0.6363...
console.log(calculateQuotient(3, 0));  // "Error: Division by zero"

// Step 16: calculateSquare
function calculateSquare(num) {
  return num ** 2;
}

// Step 17: Test calculateSquare
console.log(calculateSquare(2)); // 4
console.log(calculateSquare(9)); // 81

// Step 18: calculateSquareRoot
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

// Step 19: Test calculateSquareRoot
console.log(calculateSquareRoot(25));  // 5
console.log(calculateSquareRoot(100)); // 10
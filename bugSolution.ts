function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  const result1 = add(5, 3); // 8
  const result2 = subtract(10, 4); // 6
  const result3 = multiply(7, 2); // 14
  const result4 = divide(15, 3); // 5
  const result5 = divide(10, 0); // Throws an error
  console.log(result1, result2, result3, result4, result5);
} catch (error) {
  console.error('An error occurred:', error.message);
}
//or
function divideSafe(a: number, b: number): number {
    if (b === 0) {
        return 0; // Or handle the error in a different way
    }
    return a / b;
}
const result6 = divideSafe(10,0)
console.log(result6)
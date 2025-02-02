function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This handles the case where either a or b is 0
  }

  return a / b; //This will throw an error if b is 0
}
function performOperation() {
  let num1 = document.getElementById('input1').value;
  let num2 = document.getElementById('input2').value;

  // Convert first value to number, second intentionally left as-is for debugging
  let a = parseInt(num1);
  let b = num2; // may remain string on purpose

  debugger; // Observe values before operations

  if (!isNaN(a) && !isNaN(parseInt(b))) {
    let addition = a + parseInt(b);
    let multiplication = a * parseInt(b);
    let division = a / parseInt(b);

    debugger; // Observe results and flow

    displayResult(
      `Addition: ${addition}, Multiplication: ${multiplication}, Division: ${division}`
    );
  } else {
    displayResult("Invalid input detected. Check debugger values.");
  }
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
}

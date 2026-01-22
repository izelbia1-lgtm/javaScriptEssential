// Declare variables
let length;
let width;

// Function to calculate area
function calculateArea() {
  // Get values from input fields
  length = parseFloat(document.getElementById('length').value);
  width = parseFloat(document.getElementById('width').value);

  // Calculate area
  let area = length * width;

  // Display result
  document.getElementById('result').innerText =
    `The area of the rectangle is: ${area}`;
}

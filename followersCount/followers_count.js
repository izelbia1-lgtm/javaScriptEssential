// Initialize count to 0
var count = 0;

// Function to display the count
function displayCount() {
  document.getElementById('countDisplay').innerHTML = count;
}

// Function to check follower milestones
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

// Function to increase the count
function increaseCount() {
  count++;            // Increment the count by 1
  displayCount();     // Display the updated count
  checkCountValue();  // Check milestones
}


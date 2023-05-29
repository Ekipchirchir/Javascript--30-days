// Get references to HTML elements
const form = document.getElementById('add-player-form');
const leaderboardTable = document.getElementById('leaderboard');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  // Get form input values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const country = document.getElementById('country').value;
  const score = document.getElementById('score').value;

  // Create a new row for the leaderboard table
  const newRow = leaderboardTable.insertRow(-1);

  // Insert cells in the new row
  const firstNameCell = newRow.insertCell(0);
  const lastNameCell = newRow.insertCell(1);
  const countryCell = newRow.insertCell(2);
  const scoreCell = newRow.insertCell(3);

  // Set the cell values
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  countryCell.innerHTML = country;
  scoreCell.innerHTML = score;

  // Clear the form input fields
  form.reset();
});

// Function to handle the OK button click
function handleOkButtonClick() {
  const nameInput = document.getElementById('nameInput');
  const userName = nameInput.value.trim();

  if (userName !== "") {
      // Perform actions with the entered name (replace with your logic)
      alert(`Hello, ${userName}!`);

      // Redirect to the party page
      window.location.href = 'index2.html';
  } else {
      alert("Please enter your name.");
  }
}
  
  // Simulate loading completion
  setTimeout(() => {
    // Hide loading elements
    const years = document.querySelectorAll('.year');
    years.forEach(year => year.style.display = 'none');
  
    const searchBar = document.querySelector('.search-bar');
    searchBar.style.display = 'none';
  
    // Show input box and OK button
    const inputContainer = document.querySelector('.input-container');
    inputContainer.style.display = 'flex';
  }, 4000); // 4 seconds for loading animation

  // script.js
  function redirectToIndex2() {
    // Redirect to index2.html
    window.location.href = 'index2.html';
  }
  
  // Function to store the name on the server



  
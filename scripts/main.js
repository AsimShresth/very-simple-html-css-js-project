// Sign Up
const signUp = document.querySelector("#signup");
signUp.onclick = () => {
  let value = prompt("Please enter your name");

  if (value === "") {
    alert("Name must be filled");
  } else {
    localStorage.setItem(value, value);
  }
};

// Log In
const logIn = document.querySelector("#login");
logIn.onclick = () => {
  let value = prompt("Enter your name");
  const storeValue = localStorage.getItem(value);

  if (value === "") {
    alert("Name must be filled.");
  } else if (storeValue === value) {
    const myHeading = document.querySelector("h1");

    myHeading.textContent = `Welcome back ${storeValue}`;
  } else alert("Name not found ");
};

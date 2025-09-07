// ------------------------------
// Interactive Feature 1: Toggle Text
// ------------------------------
const toggleBtn = document.getElementById("toggleTextBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
    toggleBtn.textContent = "Hide Text";
  } else {
    toggleText.style.display = "none";
    toggleBtn.textContent = "Show Text";
  }
});

// ------------------------------
// Interactive Feature 2: Click Counter
// ------------------------------
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
let count = 0;

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// ------------------------------
// Form Validation
// ------------------------------
const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  let valid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation (basic pattern)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation (strength check)
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (!password.value.match(passwordPattern)) {
    passwordError.textContent =
      "Password must be at least 8 chars, include uppercase, number & special character.";
    valid = false;
  }

  // Prevent submission if validation fails
  if (!valid) {
    event.preventDefault();
  }
});

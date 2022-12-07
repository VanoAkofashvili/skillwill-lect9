const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("input");
  const password = document.querySelector('input[name="password"]');
  const confirmPassword = document.querySelector(
    'input[name="confirmPassword"]'
  );
  // Validations
  if (!email.value) {
    alert("Please enter the Email");
    return;
  }
  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match");
    return;
  }

  alert("Congratulations, you have successfully registered");
  // Clear the inputs
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
});

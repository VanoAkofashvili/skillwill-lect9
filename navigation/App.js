document.getElementById("root");

// ფორმა
const form = document.querySelector('form[name="auth"]');
// პირველი input
const inputFirst = form.querySelector("input");
// ბოლო input
const inputLast = form.querySelector("input:last-child");
// ან
const allInputs = form.querySelectorAll("input");
const lastInput = allInputs[allInputs.length - 1];

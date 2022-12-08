const NUMBER = Math.floor(Math.random() * 20) + 1; // დაამრგვალე ქვემოთ

const guessBtn = document.querySelector("button");
const input = document.getElementById("number");
guessBtn.addEventListener("click", function () {
  const userInput = Number(input.value);

  if (!userInput) return alert("Please enter the number");

  // შევამოწმოთ თუ გამოიცნო რიცხვი
  if (userInput === NUMBER) return alert("You are a genius");

  if (userInput < NUMBER)
    return alert("Your guess, " + userInput + ", is too low");

  if (userInput > NUMBER)
    return alert("Your guess, " + userInput + ", is too high");
});

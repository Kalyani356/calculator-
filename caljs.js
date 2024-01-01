document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let numButtons = document.querySelectorAll(".numButton");
  let opButtons = document.querySelectorAll(".opButton");
  let eqButton = document.querySelector(".eqButton");
  let clearButton = document.querySelector(".clearButton");
  let eraseButton = document.querySelector(".eraseButton");

  numButtons.forEach((button) => {
    button.addEventListener("click", () => appendToDisplay(button.innerText));
  });

  opButtons.forEach((button) => {
    button.addEventListener("click", () => appendToDisplay(button.innerText));
  });

  eqButton.addEventListener("click", calculate);
  clearButton.addEventListener("click", clearDisplay);
  eraseButton.addEventListener("click", eraseDisplay);

  dotButton.forEach((button) => {
    button.addEventListener("click", () => appendToDisplay(button.innerText));
  });

  function appendToDisplay(value) {
    if (display.innerText === "0") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function calculate() {
    try {
      display.innerText = eval(display.innerText);
    } catch (error) {
      display.innerText = "Error";
    }
  }

  function clearDisplay() {
    display.innerText = "0";
  }

  function eraseDisplay() {
    display.innerText = "0";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      appendToDisplay(button.innerText);
      highlightButton(button);
    });
  });

  function appendToDisplay(value) {
    if (display.innerText === "0") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function highlightButton(button) {
    button.style.backgroundColor = "#3498db";
    setTimeout(() => {
      button.style.backgroundColor = "#f0f0f0";
    }, 200);
  }
});

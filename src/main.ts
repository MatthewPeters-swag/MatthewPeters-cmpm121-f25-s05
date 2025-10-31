// CMPM 121 Counter App Refactored

// App state
let counter = 0;

// UI constants
const selectors = {
  incrementButton: "increment",
  decrementButton: "dec",
  resetButton: "reset",
  counterDisplay: "counter",
  headingText: "CMPM 121 Project",
};

const colors = {
  even: "lightblue",
  odd: "pink",
};

// Update the counter display, document title, and background color
function updateUI() {
  const counterElement = document.getElementById(selectors.counterDisplay);
  if (!counterElement) return;

  counterElement.textContent = `${counter}`;
  document.title = `Clicked ${counter}`;
  document.body.style.backgroundColor = counter % 2 === 0
    ? colors.even
    : colors.odd;
}

// Initialize the UI and attach event listeners
function setup() {
  document.body.innerHTML = `
    <h1>${selectors.headingText}</h1>
    <p>Counter: <span id="${selectors.counterDisplay}">0</span></p>
    <button id="${selectors.incrementButton}">Increment</button>
    <button id="${selectors.decrementButton}">Decrement</button>
    <button id="${selectors.resetButton}">Reset</button>
  `;

  const incrementButton = document.getElementById(selectors.incrementButton);
  const decrementButton = document.getElementById(selectors.decrementButton);
  const resetButton = document.getElementById(selectors.resetButton);

  if (!incrementButton || !decrementButton || !resetButton) return;

  incrementButton.addEventListener("click", () => {
    counter++;
    updateUI();
  });

  decrementButton.addEventListener("click", () => {
    counter--;
    updateUI();
  });

  resetButton.addEventListener("click", () => {
    counter = 0;
    updateUI();
  });
}

// Start the counter app
setup();

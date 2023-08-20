const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator__button');

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  const input = display.value;
  const result = eval(input);
  display.value = result;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;
    display.value += value;
  });
});
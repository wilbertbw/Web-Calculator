let calculation = localStorage.getItem('current') || '';

document.querySelector('.js-display-calculator').innerHTML = calculation;

function displayCalculator(calculation) {
  const displayElement = document.querySelector('.js-display-calculator');

  displayElement.innerHTML = calculation;
}
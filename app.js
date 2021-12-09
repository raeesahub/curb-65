const checkboxes = document.querySelectorAll('.checkbox');
const scoreBox = document.querySelector('#score');
const infoBox = document.querySelector('#info');
const recommendationBox = document.querySelector('.recommendation');
const systolicBP = document.querySelector('#sbp');
const diastolicBP = document.querySelector('#dbp');

let curbScore = 0;

const computeScore = () => {
  scoreBox.innerText = curbScore;
  infoBox.innerHTML = '';
};

const appendInfo = () => {
  recommendationBox.style.display = 'block';
  const mortality = `<p>Mortality: ${curb65[curbScore].mortality}%</p>`;
  const recommendation = `<p>${curb65[curbScore].recommendation}</p>`;
  infoBox.insertAdjacentHTML('beforeend', `${mortality} ${recommendation}`);
};

// Maximum score of one for hypotension
const checkHypotension = () => {
  diastolicBP.value = systolicBP.checked ? 0 : 1;
  systolicBP.value = diastolicBP.checked ? 0 : 1;
};

const incrementScore = (checkbox) => {
  checkHypotension();
  if (checkbox.checked) {
    curbScore += parseInt(checkbox.value, 10);
  } else {
    curbScore -= parseInt(checkbox.value, 10);
  }
  computeScore();
  appendInfo();
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => { incrementScore(checkbox); });
});

const curb65 = [
  { score: 0, mortality: 0.6, recommendation: 'Low risk; consider outpatient treatment' },
  { score: 1, mortality: 2.7, recommendation: 'Low risk; consider outpatient treatment' },
  { score: 2, mortality: 6.8, recommendation: 'Short inpatient hospitalisation or closely supervised outpatient treatment' },
  { score: 3, mortality: 14, recommendation: 'Severe pneumonia; hospitalise and consider admitting to intensive care' },
  { score: 4, mortality: 27.8, recommendation: 'Severe pneumonia; hospitalise and consider admitting to intensive care' },
  { score: 5, mortality: 27.8, recommendation: 'Severe pneumonia; hospitalise and consider admitting to intensive care' },
];

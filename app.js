const checkboxes = document.querySelectorAll('.checkbox');
const scoreBox = document.querySelector('#score');
const systolicBP = document.querySelector('#sbp');
const diastolicBP = document.querySelector('#dbp');
let curbScore = 0;

// Maximum score of one for hypotension
const checkHypotension = () => {
  diastolicBP.value = systolicBP.checked ? 0 : 1;
  systolicBP.value = diastolicBP.checked ? 0 : 1;
};

const incrementScore = (checkbox) => {
  checkHypotension();
  if (checkbox.checked) {
    curbScore += parseInt(checkbox.value, 10);
    scoreBox.innerText = curbScore;
  } else {
    curbScore -= parseInt(checkbox.value, 10);
    scoreBox.innerText = curbScore;
  }
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => { incrementScore(checkbox); });
});

const checkboxes = document.querySelectorAll('.checkbox');
const scoreBox = document.querySelector('#score');
let curbScore = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      curbScore += 1;
      scoreBox.innerText = curbScore;
    } else {
      curbScore -= 1;
      scoreBox.innerText = curbScore;
    }
  });
});

const ratingState = document.querySelector('.rating-items');
const thanksState = document.querySelector('.thank-items');
const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
let selected = '';

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    updateRating(rating.textContent);
  })
});

submit.addEventListener('click', () => {
  if (selected === '') return;
})

function updateRating(newRating) {
  ratings.forEach((rating) => {
    rating.classList.remove('selected')
  })
  selected = newRating
  document.getElementById(`${selected}`).classList.add('selected');
}

function clearRating() {
  while (ratingState.firstChild) {
    ratingState.removeChild(ratingState.firstChild)
  }
}

function clearThanks() {
  while (thanksState.firstChild) {
    thanksState.removeChild(thanksState.firstChild)
  }
}

function submitRating() {
  clearRating();
  // Create image
  // Set img class and src
  // Append img to state
  // Create selection div
  // Set div class
  // Create selection text
  // Set text class
  // Append text to div
  // Append div to state
  // Create title text
  // Set title class
  // Append title to state
  // Create para text
  // Set para CLASSES
  // Append para to state
}


clearThanks();
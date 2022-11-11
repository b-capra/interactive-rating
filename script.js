const ratingState = document.querySelector('.rating-items');
const thanksState = document.querySelector('.thank-items');
const ratings = document.querySelectorAll('.rating');
let selected = '';

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    updateRating(rating.textContent);
  })
});

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

clearRating();
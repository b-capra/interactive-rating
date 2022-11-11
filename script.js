const ratingState = document.querySelector('.rating-items');
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

function clearCard() {
  while (ratingState.firstChild) {
    ratingState.removeChild(ratingState.firstChild)
  }
}

clearCard();
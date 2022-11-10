const ratings = document.querySelectorAll('.rating');
let selected = '';

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    clearRating();
    selected = rating.textContent;
    document.getElementById(`${selected}`).classList.add('selected');
  })
});

function clearRating() {
  ratings.forEach((rating) => {
    rating.classList.remove('selected')
  })
}
const card = document.querySelector('.card');
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
  clearRating();
  submitRating();
})

function updateRating(newRating) {
  ratings.forEach((rating) => {
    rating.classList.remove('selected')
  })
  selected = newRating
  document.getElementById(`${selected}`).classList.add('selected');
}

function clearRating() {
  while (card.firstChild) {
    card.removeChild(card.firstChild)
  }
}

function submitRating() {
  card.classList.add('thanks')
  const tyImage = document.createElement('img')
  tyImage.setAttribute('src', './img/illustration-thank-you.svg')
  tyImage.classList.add('ty-image')
  card.appendChild(tyImage)
  const selection = document.createElement('div')
  selection.classList.add('selection')
  const selText = document.createElement('p')
  selText.textContent = `You selected ${selected} out of 5`
  selText.classList.add('sel-text')
  selection.appendChild(selText)
  card.appendChild(selection)
  const title = document.createElement('p')
  title.textContent = 'Thank you!'
  title.classList.add('title')
  card.appendChild(title)
  const para = document.createElement('p')
  para.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
  para.classList.add('center', 'para')
  card.appendChild(para)
}

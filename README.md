# Interactive Rating Component - Frontend Mentor Challenge Solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Overview

### Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

<img src="./screenshots/rating-state.png" width="700px">

<img src="./screenshots/thanks-state.png" width="700px">

### Links

- Solution:
- Live Site: [www.bcapra.com](https://www.bcapra.com/interactive-rating)

### Built With

- Flexbox
- Mobile-first workflow

### What I Learned

I took a lot of time during this project to focus on how I was organizing my code, how clear it was to read, and if things were being done as elegantly as possible. This resulted in some relatively lean, well-structured code that I'm quite proud of.

This is the first challenge I've done involving interactivity and changing states of a component with Javascript, which I handled here by clearing out the card upon rating submission and generating all the 'thanks state' DOM nodes in the JS file.

I was happy to remember this neat little loop that I've used once before to clear out all of the intial state items from the card:

```js
while (card.firstChild) {
  card.removeChild(card.firstChild)
}
```

This leverages truthy values to say 'if a child exists, remove it' until there are no more child nodes in the card. These kind of loops have helped me wrap my head around the idea of truthy/falsy values in JS.

## Author

- Website: [www.bcapra.com](https://www.bcapra.com)
- Frontend Mentor: [b-capra](https://www.frontendmentor.io/profile/b-capra)
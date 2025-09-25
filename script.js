import quotes from './quotes.js'

const quoteEl = document.getElementById('quote')
const quoteAuthorEl = document.getElementById('quote-author')
const newQuoteBtn = document.getElementById('newQuote')
const toggleFavoriteBtn = document.getElementById('makeFavoriteBtn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQvote = quotes[currentQuoteIndex]
  quoteEl.textContent = randomQvote.text
  quoteAuthorEl.textContent = '— ' + randomQvote.author
  toggleFavoriteBtn.textContent = randomQvote.isFavorite
    ? 'Видалити з вибраних'
    : 'Додати до вибраних'
  toggleFavoriteBtn.style.display = 'inline-block'
}
function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Видалити з вибраних'
    : 'Додати до вибраних'
  if (currentQuote.isFavorite) {
    favoritesContainer.classList.add('active')
    const favoriteCard = document.createElement('div')
    favoriteCard.classList.add('favorite-card')
    favoriteCard.innerHTML = `<p>${currentQuote.text}</p>
    <p class = "author">${currentQuote.author}</p>`
    favoritesContainer.appendChild(favoriteCard)
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card')
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.text)) {
        card.remove()
      }
    })
    if (favoritesContainer.children.length === 0) {
      favoritesContainer.classList.remove('active')
    }
  }
}

newQuoteBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)
// Показати першу цитату при завантаженні
generateRandomQuote()

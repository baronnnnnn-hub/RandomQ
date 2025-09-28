import { currentQuote } from './quote.js'

const favoriteBtn = document.getElementById('makeFavoriteBtn')
const favoritesContainer = document.getElementById('favorites-container')
favoriteBtn.addEventListener('click', toggleFavorite)

hideBtn(favoriteBtn)

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteIcon(currentQuote.isFavorite, favoriteBtn)

  if (currentQuote.isFavorite) {
    showFavoriteQoute(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    )
  } else {
    removeFavoriteQuote(currentQuote.text)
    if (favoritesContainer.children.length === 0) {
      favoritesContainer.classList.remove('active')
    }
  }
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn)
  toggleFavoriteIcon(isFavorite, favoriteBtn)
}

function toggleFavoriteIcon(isFavorite, btn) {
  btn.classList.toggle('fa', isFavorite)
  btn.classList.toggle('far', !isFavorite)
}

function showBtn(btn) {
  btn.style.display = 'inline-block'
}

function hideBtn(btn) {
  btn.style.display = 'none'
}

function showFavoriteQoute(text, author, container) {
  container.classList.add('active')
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.innerHTML = `<p>${text}</p>
    <p class = "author">${author}</p>`
  container.appendChild(favoriteCard)
}

function removeFavoriteQuote(text) {
  const favoriteCards = document.querySelectorAll('.favorite-card')
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove()
    }
  })
}

export { handleFavorite }

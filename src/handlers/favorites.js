import { quoteFavoriteBtn } from '../../index.js'

function toggleFavorite({ quote, btn, container }) {
  quote.isFavorite = !quote.isFavorite
  toggleFavoriteBtnIcon(quote.isFavorite, btn)

  quote.isFavorite
    ? showFavoriteQuote(quote, container)
    : removeFavoriteCard(quote.id)

  if (container.children.length === 0) {
    container.classList.remove('active')
  }
}

function handleFavorite(isFavorite) {
  showBtn()
  toggleFavoriteBtnIcon(isFavorite)
}

function toggleFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.classList.toggle('fa', isFavorite)
  quoteFavoriteBtn.classList.toggle('far', !isFavorite)
}

function showBtn() {
  quoteFavoriteBtn.style.display = 'inline-block'
}

function hideBtn() {
  quoteFavoriteBtn.style.display = 'none'
}

function removeFavoriteQuote(quote, container) {
  const currentQuote = document.querySelector('[data-current-quote-id]')
  const currentQuoteId = currentQuote.dataset.currentQuoteId
  quote.isFavorite = false
  removeFavoriteCard(quote.id)
  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite)
  }
  if (container.children.length === 0) {
    container.classList.remove('active')
  }
}

function showFavoriteQuote(quote, container) {
  const { id, text, author } = quote
  container.classList.add('active')
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.dataset.favoriteQuoteId = id
  favoriteCard.innerHTML = `
  <div class="favorite-card-content">
    <p>${text}</p>
    <p class = "author">${author}</p>
  </div>
  <button class = "delete-btn">Видалити з улюблених  <i class="far fa-trash-alt"></i></button>`
  container.appendChild(favoriteCard)
  const removeButton = favoriteCard.querySelector('.delete-btn')
  removeButton.addEventListener('click', () =>
    removeFavoriteQuote(quote, container)
  )
}

function removeFavoriteCard(id) {
  const card = document.querySelector(
    `.favorite-card[data-favorite-quote-id="${id}"]`
  )
  card && card.remove()
}

export { handleFavorite, toggleFavorite, hideBtn }

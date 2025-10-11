import { quoteFavoriteBtn, removeFavoriteQuote } from '../../index.js'

function toggleFavoriteCard(quote, container) {
  quote.isFavorite
    ? showFavoriteQuote(quote, container)
    : removeFavoriteCard(quote.id)

  if (container.children.length === 0) {
    container.classList.remove('active')
  }
}

function showBtn(isFavorite) {
  const btn = quoteFavoriteBtn
  if (btn.style.display === 'none') btn.style.display = 'inline-block'
  if (isFavorite) {
    btn.classList.remove('far')
    btn.classList.add('fa')
  } else {
    btn.classList.remove('fa')
    btn.classList.add('far')
  }
}

function hideBtn() {
  quoteFavoriteBtn.style.display = 'none'
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
    removeFavoriteQuote(id, container)
  )
}

function removeFavoriteCard(id) {
  const card = document.querySelector(
    `.favorite-card[data-favorite-quote-id="${id}"]`
  )
  card && card.remove()
}

export {
  toggleFavoriteCard,
  hideBtn,
  showBtn,
  showFavoriteQuote,
  removeFavoriteCard,
}

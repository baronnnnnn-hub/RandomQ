function toggleFavoriteIcon(isFavorite, btn) {
  btn.classList.toggle('fa', isFavorite)
  btn.classList.toggle('far', !isFavorite)
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

export { toggleFavoriteIcon, showFavoriteQoute, removeFavoriteQuote }

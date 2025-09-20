const quotes = [
  {
    text: 'Єдине, що ми маємо боятися — це сам страх.',
    author: 'Франклін Д. Рузвельт',
  },
  { text: 'Будь-яка дорога починається з кроку.', author: 'Невідомий' },
  { text: 'Не чекай — створюй шанс сам.', author: 'Артем К.' },
  {
    text: 'Мистецтво перемагати — знати, коли не боротися.',
    author: 'Сунь-Цзи',
  },
  {
    text: 'Найкращий час садити дерево був 20 років тому. Другий найкращий — сьогодні.',
    author: "Китайське прислів'я",
  },
]

const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const newQuoteBtn = document.getElementById('newQuote')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQvote = quotes[randomIndex]
  quoteEl.textContent = '"' + randomQvote.text + '"'
  authorEl.textContent = '— ' + randomQvote.author
}

newQuoteBtn.addEventListener('click', generateRandomQuote)

// Показати першу цитату при завантаженні
// showQuote()

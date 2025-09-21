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
  {
    text: 'Успіх приходить до тих, хто занадто зайнятий, щоб його чекати.',
    author: 'Генрі Девід Торо',
  },
  {
    text: 'Секрет успіху — почати.',
    author: 'Марк Твен',
  },
  {
    text: 'Щастя не в тому, щоб мати багато, а в тому, щоб вміти радіти малому.',
    author: 'Сократ',
  },
  {
    text: 'Тільки той, хто йде своїм шляхом, нікого не обганяє і не відстає.',
    author: 'Конфуцій',
  },
  {
    text: 'Коли ти змінюєш свої думки, ти змінюєш свій світ.',
    author: 'Норман Вінсент Піл',
  },
  {
    text: 'Не бійся повільного руху, бійся стояння на місці.',
    author: "Китайське прислів'я",
  },
  {
    text: 'Хто хоче — шукає можливості, хто не хоче — шукає причини.',
    author: 'Сократ',
  },
  {
    text: 'Єдина людина, з якою ти повинен намагатися бути кращим — це ти вчорашній.',
    author: 'Невідомий',
  },
  {
    text: 'Найдовша подорож починається з першого кроку.',
    author: 'Лао-Цзи',
  },
  {
    text: 'Невдача — це лише можливість почати знову, але вже мудріше.',
    author: 'Генрі Форд',
  },
]

const quoteEl = document.getElementById('quote')
const quoteAuthorEl = document.getElementById('quote-author')
const newQuoteBtn = document.getElementById('newQuote')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQvote = quotes[randomIndex]
  quoteEl.textContent = randomQvote.text
  quoteAuthorEl.textContent = '— ' + randomQvote.author
}

newQuoteBtn.addEventListener('click', generateRandomQuote)

// Показати першу цитату при завантаженні
// showQuote()

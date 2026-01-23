// =====================
// Variables & Arrays
// =====================
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = [];
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// =====================
// DOM Elements
// =====================
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// =====================
// Shuffle Function (Fisher–Yates)
// =====================
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// =====================
// Generate Cards
// =====================
function generateCards() {
  for (const color of cards) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = color;
    card.textContent = '?';
    card.style.backgroundColor = '#ddd';
    gameContainer.appendChild(card);
  }
}

// =====================
// Handle Card Click
// =====================
function handleCardClick(event) {
  const card = event.target;

  if (
    !card.classList.contains('card') ||
    card.classList.contains('matched') ||
    selectedCards.includes(card)
  ) {
    return;
  }

  card.textContent = card.dataset.color;
  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);

  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// =====================
// Check Match
// =====================
function checkMatch() {
  const [card1, card2] = selectedCards;

  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.textContent = '?';
    card2.textContent = '?';
    card1.style.backgroundColor = '#ddd';
    card2.style.backgroundColor = '#ddd';
  }

  selectedCards = [];
}

// =====================
// Start Game
// =====================
function startGame() {
  clearInterval(gameInterval);

  score = 0;
  timeLeft = 30;
  selectedCards = [];

  scoreElement.textContent = `Score: ${score}`;
  timerElement.textContent = `Time Left: ${timeLeft}`;

  startbtn.disabled = true;
  gameContainer.innerHTML = '';

  cards = shuffle([...colors, ...colors]);
  generateCards();

  gameContainer.addEventListener('click', handleCardClick);
  startGameTimer();
}

// =====================
// Game Timer
// =====================
function startGameTimer() {
  gameInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      alert('Game Over!');
      startbtn.disabled = false;
    }
  }, 1000);
}

// =====================
// Event Listener
// =====================
startbtn.addEventListener('click', startGame);

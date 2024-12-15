// document.addEventListener('DOMContentLoaded', () => {
//   const startScreen = document.getElementById('start-screen');
//   const charSelectScreen = document.getElementById('character-selection');
//   const gameScreen = document.getElementById('game-screen');
//   const endScreen = document.getElementById('end-screen');
//   const startButton = document.getElementById('start-button');
//   const playerNameInput = document.getElementById('player-name');
//   const charCards = document.querySelectorAll('.card');
//   const choiceButtons = document.querySelectorAll('#choices button');
//   const progressBar = document.getElementById('progress-bar');
//   const finalScore = document.getElementById('final-score');
//   const leaderboard = document.getElementById('leaderboard');
//   const restartButton = document.getElementById('restart-button');

//   let playerName = '';
//   let progress = 0;
//   let points = { A: 0, B: 0, C: 0, D: 0 };

//   startButton.addEventListener('click', () => {
//     playerName = playerNameInput.value.trim();
//     if (!playerName) {
//       alert('Please enter your name!');
//       return;
//     }
//     startScreen.classList.add('hidden');
//     charSelectScreen.classList.remove('hidden');
//   });

//   charCards.forEach(card => {
//     card.addEventListener('click', () => {
//       charSelectScreen.classList.add('hidden');
//       gameScreen.classList.remove('hidden');
//       startGame(card.dataset.character);
//     });
//   });

//   choiceButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       handleChoice(index === 0 ? 'A' : 'B');
//     });
//   });

//   restartButton.addEventListener('click', () => {
//     location.reload();
//   });

//   function startGame(character) {
//     console.log(`Starting game with ${character}`);
//     progress = 0;
//     points = { A: 0, B: 0, C: 0, D: 0 };
//     updateObjective();
//     updateScenario();
//   }

//   function handleChoice(choice) {
//     console.log(`Player chose ${choice}`);
//     points[choice]++;
//     progress++;
//     updateProgress();
//     if (progress === 5) {
//       endGame();
//     } else {
//       updateObjective();
//       updateScenario();
//     }
//   }

//   function updateObjective() {
//     document.getElementById('objective').textContent = `Objective: Objective ${Math.floor(Math.random() * 4) + 1}`;
//   }

//   function updateScenario() {
//     document.getElementById('scenario').textContent = `Scenario for level ${progress}`;
//   }

//   function updateProgress() {
//     progressBar.style.width = `${(progress / 5) * 100}%`;
//   }

//   function endGame() {
//     gameScreen.classList.add('hidden');
//     endScreen.classList.remove('hidden');
//     const averagePoints = (points.A + points.B + points.C + points.D) / 4;
//     finalScore.textContent = `Your score: ${averagePoints}`;
//     const newLeaderboardEntry = document.createElement('li');
//     newLeaderboardEntry.textContent = `${playerName}: ${averagePoints}`;
//     leaderboard.appendChild(newLeaderboardEntry);
//   }
// });

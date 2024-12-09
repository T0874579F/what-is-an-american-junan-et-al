let currentQuestionIndex = 0;
let score = 0;
let player = "";
const leaderboard = [];

async function loadQuestions() {
  const response = await fetch('./data/questions.json');
  return await response.json();
}

function startGame(selectedPlayer) {
  player = selectedPlayer;
  document.getElementById('player-select').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  loadQuestions().then((questions) => showQuestion(questions));
}

function showQuestion(questions) {
  const questionData = questions[currentQuestionIndex];
  if (!questionData) {
    endGame();
    return;
  }

  const videoContainer = document.getElementById('video-container');
  const questionElement = document.getElementById('question');
  const answersContainer = document.getElementById('answers');

  videoContainer.innerHTML = `<video src="media/${questionData.video}" controls autoplay></video>`;
  questionElement.textContent = questionData.question;
  answersContainer.innerHTML = "";

  questionData.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.onclick = () => {
      score += answer.points;
      currentQuestionIndex++;
      showQuestion(questions);
    };
    answersContainer.appendChild(button);
  });
}

function endGame() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('scoreboard').classList.remove('hidden');
  document.getElementById('final-score').textContent = `Score: ${score}`;
  leaderboard.push({ player, score });
  updateLeaderboard();
}

function updateLeaderboard() {
  const leaderboardElement = document.getElementById('leaderboard');
  leaderboardElement.innerHTML = leaderboard
    .sort((a, b) => b.score - a.score)
   

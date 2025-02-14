const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionDiv = document.getElementById('question');
const responseDiv = document.getElementById('response');
const loveLines = [
  "You're the only one for me! Please say yes!",
  "My heart beats only for you. Say yes!",
  "You make my world complete. Be my Valentine!",
  "I can't imagine my life without you. Please say yes!",
  "You're my everything. Will you be my Valentine?",
];

noBtn.addEventListener('click', () => {
  const randomLine = loveLines[Math.floor(Math.random() * loveLines.length)];
  alert(randomLine);
});

yesBtn.addEventListener('click', () => {
  questionDiv.classList.add('hidden');
  responseDiv.classList.remove('hidden');
});
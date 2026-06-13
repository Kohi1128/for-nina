// 👉 SET YOUR START DATE HERE (important)
const startDate = new Date("2026-04-07"); 

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerText =
    `${days} days, ${hours} hours, ${minutes} minutes`;
}

updateTimer();
setInterval(updateTimer, 60000);


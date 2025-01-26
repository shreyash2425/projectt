const tulipContainer = document.querySelector('.tulip-container');
const numberOfTulips = 50; // Adjust the number of tulips

for (let i = 0; i < numberOfTulips; i++) {
  const tulip = document.createElement('div');
  tulip.classList.add('tulip');
  tulip.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  tulip.style.animationDuration = Math.random() * 3 + 5 + 's'; // Random duration (5-8s)
  tulip.style.animationDelay = Math.random() * 5 + 's'; // Random delay
  tulipContainer.appendChild(tulip);
}

const bannerInner = document.querySelector('.bannerInner');
const pauseButton = document.querySelector('.pauseButton');
const pauseIcon = pauseButton.querySelector('svg');

let isPaused = false;

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;

  if (isPaused) {
    bannerInner.style.animationPlayState = 'paused';
    pauseIcon.innerHTML = `
      <path d="M3.5 2.16069C3.5 1.64616 4.05814 1.32558 4.50258 1.58484L14.5128 7.42415C14.9538 7.6814 14.9538 8.3186 14.5128 8.57585L4.50258 14.4152C4.05814 14.6744 3.5 14.3538 3.5 13.8393V2.16069Z" fill="currentColor"/>`; // Play icon
  } else {
    bannerInner.style.animationPlayState = 'running';
    pauseIcon.innerHTML = `
      <path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.7761 3.22386 14 3.5 14H6.5C6.77614 14 7 13.7761 7 13.5V2.5C7 2.22386 6.77614 2 6.5 2H3.5ZM9.5 2C9.22386 2 9 2.22386 9 2.5V13.5C9 13.7761 9.22386 14 9.5 14H12.5C12.7761 14 13 13.7761 13 13.5V2.5C13 2.22386 12.7761 2 12.5 2H9.5Z" fill="currentColor"></path>`; // Pause icon
  }
});

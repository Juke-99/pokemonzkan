var animateButton = e => {
  e.preventDefault;
  e.target.classList.remove('animate');
  e.target.classList.add('animate');

  setTimeout(() => {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
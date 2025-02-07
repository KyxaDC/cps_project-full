const buttons = document.querySelectorAll(".btn-circle");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        navigator.vibrate(5);
    });
  });

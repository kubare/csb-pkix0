var tens = 0;
var OutputTens = document.getElementById("tens");
var buttonStart = document.getElementById("btn");
var buttonStop = document.getElementById("btn-submit");
var buttonReset = document.getElementById("btn-reset");
var Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000); 
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "0";
    OutputTens.innerHTML = tens;

    Interval = setInterval(startTimer, 1000); 
})

function startTimer() {
  tens++;
  if (tens <= 9) {
    OutputTens.innerHTML = tens;
  }

  if (tens > 9) {
    OutputTens.innerHTML = tens;
  }
}

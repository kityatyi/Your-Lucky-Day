function luckyDay() {
  n = "";
  document.getElementById("lucky-day").innerText = n;
}

function dayOfWeek() {
  var n = Math.random();
  // prettier-ignore
  n = (n * 7) + 1;
  n = Math.floor(n);

  if (n === 1) {
    n = "Monday";
  } else if (n === 2) {
    n = "Tuesday";
  } else if (n === 3) {
    n = "Wednesday";
  } else if (n === 4) {
    n = "Thursday";
  } else if (n === 5) {
    n = "Friday";
  } else if (n === 6) {
    n = "Saturday";
  } else {
    n = "Sunday";
  }

  document.getElementById("lucky-day").innerText = n;

  setTimeout(luckyDay, 3333);
}

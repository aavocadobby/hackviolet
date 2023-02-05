var round = true;

function startCount() {
  document.getElementById("but").style.visibility = "hidden";
  // The data/time we want to countdown to
  var twentyfive = 1000 * 60 * 25;
  var five = 1000 * 60 * 5;
  var countDownDate = new Date().getTime() + 10000;

  // Run myfunc every second
  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the minutes and seconds left
    var minutes = Math.floor((timeleft % (1000 * 3600)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    minutes = (minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    seconds = (seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    // Result is output to the specific element
    document.getElementById("big_title").innerHTML = minutes + ":" + seconds;
    document.getElementById("big_title").style.textAlign = "center";

    // Display the message when countdown is over
    if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("big_title").innerHTML = "time for a break";
      document.getElementById("but").style.visibility = "visible";
      document.getElementById("but").style.textAlign = "center";


    }
  }, 1000);
}
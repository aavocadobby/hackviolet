let audio = new Audio('Crescent-Moon.mp3');
audio.loop = "true";
let pop = true;
let timeB = false;
pauseM = "https://www.seekpng.com/png/full/294-2944357_play-video-icon-pause-video-icon-pause-button.png";
playM = "https://r4.ai/wp-content/uploads/play-button-icon-white-8.png";

function startCount() {
  document.getElementById("but").style.visibility = "hidden";
  // The data/time we want to countdown to
  var twentyfive = 5000;
  var five = 100000;
  var countDownDate = new Date().getTime();
  if (timeB == false)
  countDownDate = countDownDate + twentyfive;
  else
  countDownDate = countDownDate + five;
  // Run myfunc every second
  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the minutes and seconds left
    var minutes = Math.floor((timeleft % (1000 * 3600)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    minutes = (minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    seconds = (seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    // Result is output to the specific element
    document.getElementById("big_title").innerHTML = minutes + ":" + seconds;
    document.getElementById("big_title").style.textAlign = "center";

    // Display the message when countdown is over
    if (timeleft < 0) {
      if (timeB == false)
      {
        document.getElementById("big_title").innerHTML = "time for a break";
      }
      else{
        document.getElementById("big_title").innerHTML = "time to study";
      }
      timeB = !timeB;
      clearInterval(myfunc);
    
      document.getElementById("but").style.visibility = "visible";
      document.getElementById("but").style.textAlign = "center";


    }
  }, 1000);
}
function changeSound() {
  if (pop == true) {
    audio.play();
    pop = false;
    document.getElementById("butS").src = pauseM;
  }
  else {
    audio.pause();
    pop = true;
    document.getElementById("butS").src = playM;

  }
}
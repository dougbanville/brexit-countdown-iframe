var clock;

$(document).ready(function() {
  //Friday, March 29, 2019
  // Grab the current date
  var currentDate = new Date();

  // Set some date in the future. In this case, it's always Jan 1
  var futureDate = new Date("Friday, March 29, 2019, 23:00");

  // Calculate the difference in seconds between the future and current date
  //var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  var opts = {
    clockFace: "DailyCounter",
    countdown: true
  };
  opts.classes = {
    active: "flip-clock-active",
    before: "flip-clock-before",
    divider: "flip-clock-divider",
    dot: "flip-clock-dot",
    label: "flip-clock-label",
    flip: "flip",
    play: "play",
    wrapper: "flip-clock-small-wrapper"
  };
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  var countdown = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  //countdown = Math.max(1, countdown);
  // Instantiate a coutdown FlipClock
  clock = $(".clock").FlipClock(countdown, opts, {
    clockFace: "DailyCounter",
    countdown: true
  });
});

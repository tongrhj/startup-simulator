//Initalise on game start: addmoneyBtn, etc.
$(document).ready(function(){
  $("#addmoneyBtn").click(function(){
    Money.add(player.moneyPerClick);
  }),
  $("#addusersBtn").click(function(){
    Users.add(player.usersPerClick);
  })
});

var Game = function() {
  // Cache a bound onFrame since we need it each frame.
    this.onFrame = this.onFrame.bind(this);

  // Restart the onFrame loop
    this.lastFrame = +new Date() / 1000;
    requestAnimFrame(this.onFrame);
};
Game.prototype.onFrame = function() {

    var now = +new Date() / 1000,
        delta = now - this.lastFrame;
    this.lastFrame = now;

  // Add Money/Users per second per delta and update money/users display
  Money.add(player.moneyPerSecond*delta);
  Money.update();
  Users.churn(player.userschurnPerSecond*delta);
  Users.update();
  //document.title = ""+Math.round(this.monies);
    // Request next frame.
    requestAnimFrame(this.onFrame);
};
/**
   * Cross browser RequestAnimationFrame
   */
  var requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(/* function */ callback) {
          window.setTimeout(callback, 1000 / 60);
        };
  })();

var gameInstance = new Game();

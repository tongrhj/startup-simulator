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

  // Add Money per second per delta
  player.money += player.moneyPerSecond*delta;
  //document.title = ""+Math.round(this.monies);
  $('#moneyDisplay').html(Math.round((player.money*100)/100));
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

function addMoney(money) {
  player.money += money;
  if (player.money < 0) player.money = 0;
}

//Initalise on game start: addmoneyBtn, etc.
$(document).ready(function(){
  $("#addmoneyBtn").click(function(){
    addMoney(player.moneyPerClick);
  })

});

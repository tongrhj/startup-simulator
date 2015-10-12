//This is a Module pattern of Javascript, should alleviate possibility of variable conflicts
var Money = (function() {
  return {
      add: function(moneytoadd){
        player.money += moneytoadd;
        if (player.money < 0) player.money = 0;
      },
      update: function(){
        $('#moneyDisplay').html(Math.round((player.money*100)/100));
      },
      log: function(){
        console.log(player.money)
      }
  }
})();

//Initalise on game start: addmoneyBtn, etc.
$(document).ready(function(){
  $("#addmoneyBtn").click(function(){
    Money.add(player.moneyPerClick);
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

  // Add Money per second per delta
  Money.add(player.moneyPerSecond*delta);
  Money.update();
  //document.title = ""+Math.round(this.monies);
<<<<<<< HEAD

=======
  $('#moneyDisplay').html(Math.round((player.money*100)/100));
>>>>>>> origin/master
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

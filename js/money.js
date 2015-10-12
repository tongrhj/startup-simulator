// Module that handles Money

var Money = (function() {
  return {
      add: function(moneyToAdd){
        player.money += moneyToAdd;
        if (player.money < 0) player.money = 0;
      },
      subtract: function(moneyToSubtract){
        player.money -= moneyToSubtract;
        if (player.money < 0) player.money = 0;
      },
      update: function(){
        $('#moneyDisplay').html(Math.round((player.money*100)/100));
      },
      log: function(){
        console.log(player.money);
      },
      setburnrate: function(){
        player.moneyburnPerSecond = (player.users/10);
      }
  }
})();

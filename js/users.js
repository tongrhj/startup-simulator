var Users = (function() {
  return {
      add: function(usersToAdd){
        player.users += usersToAdd;
        if (player.users < 0) player.users = 0;

      },
      update: function(){
        $('#usersDisplay').html(Math.round((player.users*100)/100));
      },
      churn: function(usersToSubtract){
        player.users -= usersToSubtract;
        if (player.users < 0) player.money = 0;
      },
      log: function(){
        console.log(player.users);
      }
  }
})();

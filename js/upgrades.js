var upgrades = (function() {
  var upgradesToDisplay = ["timeline", "referrals"];
  return {
  //Enables/Disables Feature Purchase Buttons
    updateBtns: function () {
      for (i = 0; i < upgradesToDisplay.length; i++) {
        $('td#featuresDisplay').append("<tr><button class='btn btn-warning'>"+upgradesToDisplay[i]+"</button></tr>");
      };
    } // ,
  };

})();

upgrades.updateBtns();

var upgrades = (function() {
  var upgradesToDisplay = ["timeline", "referrals"];
  return {
  //Enables/Disables Feature Purchase Buttons
    updateBtns: function () {
      for (i = 0; i < upgradesToDisplay.length; i++) {
        $('tr#featuresDisplay').append("<tr><button class='buyfeaturesBtn'>"+i+"</button></tr>");
      };
    } // ,
  };

})();

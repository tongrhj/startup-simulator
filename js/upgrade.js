var upgrades = (function() {
  var upgradesToDisplay = ["timeline", "referrals"];
  return {
  //Enables/Disables Feature Purchase Buttons
    updateBtns: function () {
    upgradesToDisplay.forEach(function(elem) {
      $('tr#featuresDisplay').append("<tr><button class='buyfeaturesBtn'>"+elem+"</button></tr>")
      });
    }


  };

})();

// Contains all data to be relied on

var player = {
  money: 100,
  moneyPerSecond: 0,
  moneyPerClick: 1,
  moneyburnPerSecond: 0,
  users: 1,
  usersPerSecond: 0.1,
  usersPerClick: 1,
  userschurnPerSecond: 0.05,

  features: {
    timeline: 0,
    cart: 0
  }

};

var teams = {
  Product: {
    Features: {
      'timeline': {
        name: _('timeline'),
        button: null,
        maximum: 1,
        availableMsg: _('builder says she can make traps to catch any creatures might still be alive out there'),
        buildMsg: _('more traps to catch more creatures'),
        maxMsg: _("more traps won't help now"),
        type: 'building',
        cost: function() {
          var n = player.features["timeline"];
          return {
            'money': 10 + (n*10)
          };
        }
      }
  }

};

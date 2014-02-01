var Performer = require('../models/performer');

var PerformerRoute = Ember.Route.extend({

  model: function() {
    return Performer.find();
  }

});

module.exports = PerformerRoute;


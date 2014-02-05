var Event = require('../models/event');

var EventsRoute = Ember.Route.extend({

  model: function() {
    return Event.find();
  }

});

module.exports = EventsRoute;


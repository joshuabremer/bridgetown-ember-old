var Performer = require('../models/performer');

var PerformerRoute = Ember.Route.extend({

  // model: function(params) {
  //   return Performer.find();
  // }
  model: function() {
    return $.ajax({
      url: 'https://bridgetown-dev.squarespace.com/performers/?format=json-pretty',
      crossDomain: true,
      dataType: 'JSONP'
    }).then(function(data) {
      return data.items;
    });
  }

});

module.exports = PerformerRoute;


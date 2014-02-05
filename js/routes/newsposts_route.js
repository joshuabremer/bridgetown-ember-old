var Newspost = require('../models/newspost');

var NewspostRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('newspost');
  }

});

module.exports = NewspostRoute;


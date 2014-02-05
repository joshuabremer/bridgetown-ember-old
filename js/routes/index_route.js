var Newspost = require('../models/newspost');

var IndexRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('newspost');
  }

});

module.exports = IndexRoute;


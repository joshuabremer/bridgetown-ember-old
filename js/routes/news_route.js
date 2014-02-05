var News = require('../models/news');

var NewsRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('performer');
  }
  // model: function() {
  //   return $.ajax({
  //     url: 'https://bridgetown-dev.squarespace.com/performers/?format=json-pretty',
  //     crossDomain: true,
  //     dataType: 'JSONP'
  //   }).then(function(data) {
  //     return data.items;
  //   });
  // }

});

module.exports = NewsRoute;


App.NewspostsRoute = Ember.Route.extend({

  model: function(params) {
    return $.ajax({
      url: 'http://bridgetown-dev.squarespace.com/newsposts/?format=json-pretty',
      dataType:'jsonp'
    }).done(function(data) {
      return data.items;
    });
  }

});

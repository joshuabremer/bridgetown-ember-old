App.CatchAllRoute = Ember.Route.extend({
    model: function(a,b,c) {
      var host = 'https://bridgetowncomedy.com/';
      return Ember.$.ajax({
        url: host + a[':'] + '?format=json-pretty',
        dataType: 'JSONP'
      });
    }
});
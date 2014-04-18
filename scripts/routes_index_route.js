App.IndexRoute = Ember.Route.extend({

  model: function() {
    return _retrievePageJSON('front-page');
  },

  renderTemplate: function() {
    this.render('index');
    this.render('jumbotron_index', { outlet: 'jumbotron' });
  }

});

function _retrievePageJSON(page) {
  host = 'http://www.bridgetowncomedy.com/';
  return Ember.$.ajax({ 
    url: host + page + '?format=json-pretty',
    dataType: 'JSONP'
  }).then(function(data) {
    return data;
  });
}
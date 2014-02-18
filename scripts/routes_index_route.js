App.IndexRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('newspost');
  },

  renderTemplate: function() {
    this.render();
    this.render('jumbotron_index', { outlet: 'jumbotron' });
  }

});




App.PerformersRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('performer');
  },

  renderTemplate: function() {
    this.render();
    this.render('jumbotron_index', { outlet: 'jumbotron' });
  }

});


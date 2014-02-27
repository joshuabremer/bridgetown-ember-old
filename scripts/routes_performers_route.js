App.PerformersRoute = Ember.Route.extend({

  model: function(params) {
    console.log(params);
    if (this.store.all('performer').content.length) {
      return this.store.all('performer');
    }
    return this.store.find('performer');
  },

  renderTemplate: function() {
    this.render();
    this.render('jumbotron_performers', { outlet: 'jumbotron' });
  }

});


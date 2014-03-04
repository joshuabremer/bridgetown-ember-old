App.PerformersRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('performer');
  },
  title: 'Performers'
});


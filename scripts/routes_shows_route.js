App.ShowsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('show');
  },
  title: 'Shows'
});


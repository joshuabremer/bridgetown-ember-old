App.PerformerRoute = Ember.Route.extend({
  model: function(params) {
    var _this = this;
    this.set('params_slug',params.slug);
    return this.store.find('performer').then(function() {
      return _this.store.find(App.Performer, params.id);
    });
  },
  title: 'Performer'
});


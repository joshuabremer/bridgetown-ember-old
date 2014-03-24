App.ShowRoute = Ember.Route.extend({
  model: function(params) {
    var _this = this;
    this.set('params_slug',params.slug);
    return this.store.find('show').then(function() {
      //return _this.store.find(App.Show, params.id);
      return _this.store.find('show',params.pageUrl.split('-')[0]);
    });
  },
  title: 'Show'
});


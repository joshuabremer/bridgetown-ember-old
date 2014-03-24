App.PerformerRoute = Ember.Route.extend({
  model: function(params) {
    // var _this = this;
    // this.set('params_slug',params.slug);
    // return this.store.find('performer').then(function getIndividualPerformer() {
    //   //return _this.store.find(App.Performer, params.id);
    //   console.log(1);
    //   return _this.store.find({ pageUrl: params.pageUrl });
    // });

    var _this = this;
    this.set('params_slug',params.slug);
    return this.store.find('performer').then(function getIndividualPerformer() {
      console.log(1);
      return _this.store.find('performer',params.pageUrl.split('-')[0]);
    });
  },
  title: 'Performer'
});


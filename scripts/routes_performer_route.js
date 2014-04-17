App.PerformerRoute = Ember.Route.extend({
  model: function(params) {


    var _this = this;
    this.set('params_slug',params.slug);
    return Ember.RSVP.hash({
        venues: this.store.find('venue'),
        performers: this.store.find('performer'),
        events: this.store.find('event'),
        performer: this.store.find('performer',params.pageUrl.split('-')[0])
    }).then(function(data) {
      return data.performer;
    });
  },
  title: 'Performer'
});


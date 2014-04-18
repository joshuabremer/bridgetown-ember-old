App.EventRoute = Ember.Route.extend({
  model: function(params) {
    var _this = this;
    return Ember.RSVP.hash({
        shows: this.store.find('show'),
        performers: this.store.find('performer'),
        events: this.store.find('event'),
        venues: this.store.find('venue')
    }).then(function(data) {
      return _this.store.find('event',params.events_id);
    });
  },
  title: 'Event'
});


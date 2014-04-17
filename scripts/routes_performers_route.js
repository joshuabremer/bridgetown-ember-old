App.PerformersRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
        venues: this.store.find('venue'),
        performers: this.store.find('performer'),
        events: this.store.find('event')
    }).then(function(data) {
      return data.performers;
    });
  },
  title: 'Performers'
});


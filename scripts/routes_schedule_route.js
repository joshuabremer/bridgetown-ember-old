App.ScheduleRoute = Ember.Route.extend({
  model: function() {
      return Ember.RSVP.hash({
          venues: this.store.find('venue'),
          performers: this.store.find('performer'),
          events: this.store.find('event')
      });
  },
  title: 'Schedule'
});

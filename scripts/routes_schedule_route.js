App.ScheduleRoute = Ember.Route.extend({
  model: function() {
      return Ember.RSVP.hash({
          venues: this.store.find('venue'),
          performers: this.store.find('performer'),
          events: this.store.find('event'),
          venues: this.store.find('venue')
      });
  },
  title: 'Schedule',
  
  actions: {
    filterThursday: function() {
      var newModel = Ember.RSVP.hash({
          venues: this.store.find('venue'),
          performers: this.store.find('performer'),
          events: this.store.find('event')
      });
      this.set('model',newModel)
    }
  }
});

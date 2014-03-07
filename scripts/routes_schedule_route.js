App.ScheduleRoute = Ember.Route.extend({
  model: function(params) {
    this.store.find('event');
    return this.store.find('performer');
  },
  title: 'Schedule'
});

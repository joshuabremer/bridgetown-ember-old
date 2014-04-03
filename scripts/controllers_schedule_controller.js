App.ScheduleController = Ember.ObjectController.extend({
  sortProperties: ['start_time'],
  sortAscending: true,

  actions: {
    filterThursday: function() {
      this.set('scheduleClass','filter-items filter-thursday');
    },
    filterFriday: function() {
      this.set('scheduleClass','filter-items filter-friday');
    },
    filterSaturday: function() {
      this.set('scheduleClass','filter-items filter-saturday');
    },
    filterSunday: function() {
      this.set('scheduleClass','filter-items filter-sunday');
    }
  },

  scheduleClass: "",


  events: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['start_time'],
      content: this.get('content.events')
    });
  }).property('content.events')
});


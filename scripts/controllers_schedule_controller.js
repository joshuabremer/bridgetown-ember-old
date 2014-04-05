App.ScheduleController = Ember.ObjectController.extend({
  sortProperties: ['start_time'],
  sortAscending: true,

  actions: {
    filterThursday: function() {
      alert(1);
    }
  },


  events: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['start_time'],
      content: this.get('content.events')
    });
  }).property('content.events')
});


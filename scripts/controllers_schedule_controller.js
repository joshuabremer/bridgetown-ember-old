App.PerformersController = Ember.ArrayController.extend({
  sortProperties: ['start_time'],
  sortAscending: true,

  actions: {
    filterThursday: function() {
      alert(1);
    }
  }
});


var event = require('../models/event');

var NewEventsRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_event', {controller: 'new_events'});
  },

  model: function() {
    return event.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewEventsRoute;


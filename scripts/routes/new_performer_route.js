var performer = require('../models/performer');

var NewPerformerRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_performer', {controller: 'new_performer'});
  },

  model: function() {
    return performer.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewPerformerRoute;


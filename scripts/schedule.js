(function() {
  var Event = Backbone.View.Model({

  });

  var EventCollection = Backbone.View.Collection({
    model: Event,
    url: 'https://bridgetown-dev.squarespace.com/events/?format=json',
    sync: function() {

    }

  });

  var EventView = Backbone.View.extend({
    
  });

  var ScheduleView = Backbone.View.extend({

  });

  window.eventCollection = new EventCollection();
}());
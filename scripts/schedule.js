(function() {
  var Event = Backbone.Model.extend({

  });

  var EventCollection = Backbone.Collection.extend({
    model: Event,
    url: 'https://bridgetown-dev.squarespace.com/events/?format=json'

  });

  var EventView = Backbone.View.extend({
    
  });

  var ScheduleView = Backbone.View.extend({

  });

  window.eventCollection = new EventCollection();
}());
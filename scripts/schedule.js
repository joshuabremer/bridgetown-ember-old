(function() {
  var Event = Backbone.Model.extend({

  });

  var EventCollection = Backbone.Collection.extend({
    model: Event,
    url: 'https://bridgetown-dev.squarespace.com/events/?format=json',

    // Modified from default fetch function
    sync: function() {
      Backbone.ajax({
        url: this.url
      }).done(function(a,b,c) {
        console.log(a,b,c);
      });
    },

  });

  var EventView = Backbone.View.extend({
    
  });

  var ScheduleView = Backbone.View.extend({

  });

  window.eventCollection = new EventCollection();
}());
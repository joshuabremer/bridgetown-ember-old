(function() {
  var Event = Backbone.Model.extend({

  });

  var EventCollection = Backbone.Collection.extend({
    var _this = this;
    model: Event,
    url: 'https://bridgetown-dev.squarespace.com/events/?format=json',
    initialize: function() {
      this.sync();
    },
    // Modified from default fetch function
    sync: function() {
      Backbone.ajax({
        url: this.url
      }).done(function(data) {
        console.log('Sync complete.')
        _this.add(data.past,{merge:true})
      });

    },

  });

  var EventView = Backbone.View.extend({
    
  });

  var ScheduleView = Backbone.View.extend({

  });

  window.eventCollection = new EventCollection();
}());
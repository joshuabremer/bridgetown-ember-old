(function() {
  var Event = Backbone.Model.extend({
    toJSON: function() {

    }
  });

  var EventCollection = Backbone.Collection.extend({
    model: Event,
    url: 'https://bridgetown-dev.squarespace.com/events/?format=json',
    initialize: function() {
      this.sync();
    },
    // Modified from default fetch function
    sync: function() {
      var _this = this;
      Backbone.ajax({
        url: this.url
      }).done(function(data) {
        console.log('Sync complete.');
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
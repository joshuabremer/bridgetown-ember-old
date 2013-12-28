(function() {
  var Event = Backbone.Model.extend({

  });

  var EventCollection = Backbone.Collection.extend({
    model: Event,
    url: 'https://bridgetown-dev.squarespace.com/events/?format=json',

    // Modified from default fetch function
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    }

  });

  var EventView = Backbone.View.extend({
    
  });

  var ScheduleView = Backbone.View.extend({

  });

  window.eventCollection = new EventCollection();
}());
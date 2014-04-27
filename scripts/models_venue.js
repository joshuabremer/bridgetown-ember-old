App.Venue = DS.Model.extend({

  events: DS.hasMany('event', {async: true}),

  Name: DS.attr('string'),

  pageUrl: DS.attr('string'),

});
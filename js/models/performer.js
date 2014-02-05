App.Performer = DS.Model.extend({

  events: DS.hasMany('event'),

  name: DS.attr('string'),

  headshot: DS.attr('string'),

  bio: DS.attr('string')

});


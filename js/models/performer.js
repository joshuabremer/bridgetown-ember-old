App.Performer = DS.Model.extend({

  categories: DS.hasMany('category'),

  name: DS.attr('string'),

  headshot: DS.attr('string'),

  bio: DS.attr('string'),

  urlId: DS.attr('string')

});


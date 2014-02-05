App.Newspost = DS.Model.extend({

  performers: DS.hasMany('performer'),
  
  name: DS.attr('string'),

  bio: DS.attr('string'),

  headshot: DS.attr('string')

});

